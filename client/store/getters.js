export const id = state => state.oodlet.id;

export const dueDate = state => state.oodlet.dueDate;

export const quantifiedThingies = state => state.oodlet.quantifiedThingies;

export const oodler = state => state.oodler.oodler;

export const appInitialized = state => state.app.initialized;

export const pendingOodlets = state => state.pendingOodlets.pendingOodlets
  .sort((a,b) => {
    return a.oodler.office < b.oodler.office ? -1 : 1;
  });

export const totalOodlet = state => state.totalOodlet;

export const totalOodletOffices = state => {
  let offices = [];
  for(let id of state.totalOodlet.oodletIds) {
    let oodlet = state.pendingOodlets.pendingOodlets.find(pendingOodlet => pendingOodlet.id === id);
    if(oodlet) {
      offices.push(oodlet.oodler.office);
    }
  }
  return offices.sort();
};
