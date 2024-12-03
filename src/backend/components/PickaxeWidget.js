import React, { useEffect } from "react";

const PickaxeWidget = () => {
  useEffect(() => {
    window.PICKAXE = window.PICKAXE || {
      pickaxes: [],
      style:
        "kHsjoCQGgI0GWASmgIdIAxiDA6wgM6CMbgC4UgDDAXYEAvDIBoGEBgG4CAWQIGYBgwCqApdoEjggjIaCcCoCA9gGzOBUToIQygtAyABoIClVgJhtAFwqAFQEAHkIAXAQAASgLCfAhqSAAAsDEAYEY+QJckgGXFAhUGBQ30CssIGW7QC6VgSoRAA0uBF3ECfNIBogQFSwgSRNAIqyAAZEAUYIHwgwFxCgEQlAAAqAauyAEp6AQRmANLCAWEKAIgyAAAiACEoA+oB6QADwgB5IgBEjgAkmgGksgCEwAG6ACTSAPTiAJUGAUrCAQU2AQhaAEHyAK3iAgy8AaoB1cIBDP4CBfYAYCYBJPICJhIBjjYAjkYBzGoCdO4B/e4ClT4BWVYCLrYBlYYAXaYCbuYBHeYAvo4BMKoANpoAMSIBSFIDP3QDigDKegFjigIhcAGCAQAuAiBeAYRiACAyAUISAgWCABR6AYCiAKFjACDhgAAKQAFKYBiGoAQIB0aUADEIAFEAGhSALmdAAEIgBegQCACIAijMATOKAODRAKiBgACQwAWioAyEsA6NyAR6jAJJIgCmTQAhBoBgAcAHEaACobAGxSgFYmQAluIBGk8AH46ASz3AHEEgDKpQAAIoAXmkAGCuAYGxAOlCgAEmwCfTYAOeUAlSkAasARKCAJuLAEDQgAGhwCGCoB3AsAC+WAVGLAKKugASZwAwUQAQQAj5CDAAAjgEEhwDjBYBlusAb+CAAoRAGA0gAAkQAUUIBsnEAyV+AKDPAOGsgCgKQBewYBfhsA/CSABn7AIz6gAGEwD6LIABQ0AcyCAAA1AAAOgGsRQBEtYBTScAz4KAdA7AAjQgDeHwChRoBRI0ARQSAdWXADPCgDKwQCsCYBFDEAhxmAY01AEeCgAjGwBAoIBoTEANcqAOOpAEsagAQwQBkIoBcNEAw/GAC8TAF43gGEDwAF8oAb5kAdzaAJ49AHRggF+0wDWEIAlxMAYhCAQAFABY1gHA1wAERUAFIRABFEAAXQAEZMAatFADUkwAREkABWdAEIXQAAwEATxZAAwKQA04kAFwHAC/qQAsAkAScTAD/HQA8TcAB3HAFKaGIgA==",
    };
    window.PICKAXE.pickaxes.push({
      id: "MealMate_AI_VB5RM",
      type: "inline",
    });

    const { id: _fid } = window.PICKAXE.pickaxes[0];
    fetch(`https://embed.pickaxeproject.com/axe/api/script/${_fid}`)
      .then((e) => e.json())
      .then(({ v: e }) => {
        const t = `https://cdn.jsdelivr.net/gh/pickaxeproject/cdn@${e}/dist`;
        if (!document.querySelector(`script[src="${t}/bundle.js"]`)) {
          const e = document.createElement("script");
          e.src = t + "/bundle.js";
          e.defer = true;
          document.head.appendChild(e);
        }
      });
  }, []);

  return <div id="pickaxe-inline-MealMate_AI_VB5RM"></div>;
};

export default PickaxeWidget;
