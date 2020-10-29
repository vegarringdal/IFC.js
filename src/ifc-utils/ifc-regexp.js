const regexp = {
  allNewLines: /\r?\n|\r/g,
  headerSection: /HEADER;.+?(?=ENDSEC;)/,
  dataSection: /DATA;\s+.+(?=ENDSEC;)/,
  rawIfcType: /IFC\w+/,
  rawIfcProperties: /\(.+?(?=;)/,
  singleIfcItems: /#\d+\s*=\s*IFC.+?\);\s*/g,
  initialComma: /^,/,
  separator: /,/,
  guid: /^'(\w|[$]){22}'/,
  expressId: /^#\d+/,
  expressIdSet: /\((#\d+|,| )+?\)/,
  Number: /[0-9.E-]+/,
  numberSet: /^\([0-9.,-E]+\)/,
  text: /''(?=,)|^'.+?'(?=\s*,)|^'.+?'(?=\s*$)/,
  enum: /\.\w+?\.|/,
  default: /^\$/,
  emptySet: /^\(\)/,
  asterisk: /^\*/,
  ifcValue: /[A-Z]+\((\d|\.)+?\)/,
  boundingApostrophes: /^'|'$/g,
  boundingPoints: /^\.|\.$/g,
  boundingBrackets: /^\(|\)$/g,
  boundingSpaces: /^[ ]+|[ ]+$/g,
};

export { regexp };
