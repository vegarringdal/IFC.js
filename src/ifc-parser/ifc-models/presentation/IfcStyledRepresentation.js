import { ifcClass } from "../../utils/globalProperties.js";
import { ifcDataTypes as d } from "../../utils/ifc-data-types.js";
import { getName, ifcTypes as t } from "../../utils/ifc-types.js";

const IfcStyledRepresentation = {
  [ifcClass]: getName(t.IfcStyledRepresentation),
  ContextOfItems: d.id,
  RepresentationIdentifier: d.text,
  RepresentationType: d.text,
  Items: d.idSet,
};

export { IfcStyledRepresentation };