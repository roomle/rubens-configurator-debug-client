import RoomleConfiguratorApi from '@roomle/embedding-lib';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const configurationId = urlParams.get('id');
const serverUrl = urlParams.get('serverUrl');

export interface DebugValueMapDump {
  type: string;
  id: number;
  values: Record<string, string>;
}

export interface DebugValueMapChange {
  sourceId: number;
  sourceInfo: string;
  valueMaps: Record<string, DebugValueMapDump>;
}

const updateQueue: DebugValueMapChange[] = [];

const valueTable = document.getElementById('value-table') as HTMLTableElement;
const fillTableWithValueMap = (
  valueMap: DebugValueMapDump,
  oldValueMap?: DebugValueMapDump
) => {
  clearTable(valueTable);
  for (const [key, value] of Object.entries(valueMap.values)) {
    let oldValue: string | null = null;
    if (
      oldValueMap &&
      Object.prototype.hasOwnProperty.call(oldValueMap.values, key)
    ) {
      oldValue = oldValueMap.values[key];
    }
    const row = valueTable.insertRow();
    const cellKey = row.insertCell(0);
    const cellValue = row.insertCell(1);
    cellKey.textContent = key;
    cellValue.textContent = value;
    if (oldValue === null) {
      cellKey.style.color = 'blue';
      cellValue.style.color = 'blue';
    } else if (oldValue !== value) {
      cellValue.style.color = 'red';
    }
  }
};

const updateTable = () => {
  const updateIndex = parseInt(updateSelection.value, 10);
  if (updateIndex < updateQueue.length) {
    const change = updateQueue[updateIndex];
    const mapKey = mapSelection.value;
    if (Object.prototype.hasOwnProperty.call(change.valueMaps, mapKey)) {
      const oldValueMaps =
        updateIndex > 0 ? updateQueue[updateIndex - 1] : null;
      const oldValueMap = oldValueMaps?.valueMaps[mapKey] ?? undefined;
      const valueMap = change.valueMaps[mapKey];
      fillTableWithValueMap(valueMap, oldValueMap);
    }
  }
};

const mapSelection = document.getElementById(
  'map-selection'
) as HTMLSelectElement;
mapSelection.onchange = () => updateTable();

const changeMapSelection = (change: DebugValueMapChange) => {
  const currentSelection = mapSelection.value;
  let currentValueMapIndex = 0;
  mapSelection.options.length = 0;
  for (const [, value] of Object.entries(change.valueMaps)) {
    if (currentSelection === value.id.toString()) {
      currentValueMapIndex = mapSelection.options.length;
    }
    const optionText = `(${value.id}) ${value.type}`;
    addOptionToSelection(mapSelection, optionText, value.id);
  }
  mapSelection.selectedIndex = currentValueMapIndex;
  updateTable();
};

const updateSelection = document.getElementById(
  'update-selection'
) as HTMLSelectElement;
updateSelection.onchange = () => {
  const selectedIndex = parseInt(updateSelection.value, 10);
  if (selectedIndex < updateQueue.length) {
    changeMapSelection(updateQueue[selectedIndex]);
  }
};

const addUpdate = (change: DebugValueMapChange) => {
  const index = updateQueue.length;
  updateQueue.push(change);
  const optionText = `(${change.sourceId}) ${change.sourceInfo}`;
  addOptionToSelection(updateSelection, optionText, index);
  updateSelection.selectedIndex = index;
  changeMapSelection(change);
};

const addOptionToSelection = (
  selectElement: HTMLSelectElement,
  text: string,
  index: number
) => {
  const option = document.createElement('option');
  option.text = text;
  option.value = index.toString();
  selectElement.add(option);
};

const clearTable = (table: HTMLTableElement) => {
  const tbody = table.getElementsByTagName('tbody')[0];
  if (tbody) {
    while (tbody.rows.length > 0) {
      tbody.deleteRow(0);
    }
  }
};

const createConfigurator = async (htmlElement: HTMLElement, options: any) => {
  const configuratorApi = await RoomleConfiguratorApi.createConfigurator(
    'demoConfigurator',
    htmlElement,
    options,
    ['dragIn']
  );
  return configuratorApi;
};

const id = configurationId ?? 'usm:frame';
const overrideServerUrl = serverUrl ?? 'https://www.roomle.com/t/bo-mvp/';
const options = {
  id,
  overrideServerUrl,
  customApiUrl: 'https://api.roomle.com/v2',
};

const startConfigurator = async () => {
  const configuratorApi = await createConfigurator(
    document.getElementById('configurator-container') as HTMLElement,
    options
  );
  configuratorApi.extended.callbacks.onValueMapChanged = (
    change: DebugValueMapChange
  ) => {
    addUpdate(change);
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  configuratorApi.extended.enableDebugging();
};
void startConfigurator();
