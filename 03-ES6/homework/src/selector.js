var traverseDomAndCollectElements = function (
  matchFunc,
  startEl,
  resultSet = []
) {
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl) === true) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    traverseDomAndCollectElements(matchFunc, startEl.children[i], resultSet);
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.includes(".")) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    matchFunction = (el) => {
      return "#" + el.id === selector;
    };
  } else if (selectorType === "class") {
    matchFunction = (el) => {
      // return el.classList.contains(selector.slice(1));
      for (const clases of el.classList) {
        // ["lkj", "myClass", "kjhkashofik"]
        if (`.${clases}` === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    var [tag, clase] = selector.split(".");
    matchFunction = (el) =>
      matchFunctionMaker(tag)(el) && matchFunctionMaker(`.${clase}`)(el);
  } else if (selectorType === "tag") {
    matchFunction = (el) => {
      return el.tagName && el.tagName.toLowerCase() === selector.toLowerCase();
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
