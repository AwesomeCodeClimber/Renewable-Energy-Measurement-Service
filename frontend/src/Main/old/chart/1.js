// const { element } = require("prop-types");
// Max Circle

let id = null;
id = setInterval(frame, 5);

function frame(index, element) {
    if (index == 0 && top == 235) {
        clearInterval(id);
    }
    else if (index == 0 && top != 235) {
        top--;
        element.style.top = top + "px";
    }
    else if (index == 1 && top == 230) {
        clearInterval(id);
    }
    else if (index == 1 && top != 230) {
        top--;
        element.style.top = top + "px";
        element.style.left = left + "px";
    }
}

/** Final Place */
switch (index) {
    case 0:
        element.style.top = "235px";
        element.style.left = (window.innerWidth - 127 - elemWidth) / 2 + "px";
        leftWidths.push((window.innerWidth - 127 - elemWidth) / 2);
        break;
    case 1:
        element.style.top = "230px";
        element.style.left = (leftWidths[0] - elemWidth + overlap_width) + "px";
        leftWidths.push(leftWidths[0] - elemWidth + overlap_width);
        break;
    case 2:
        element.style.top = "300px";
        element.style.left = (leftWidths[1] - elemWidth + 50) + "px";
        leftWidths.push(leftWidths[0] - elemWidth + overlap_width);
        break;
    case 3:
        element.style.top = "450px";
        element.style.left = (leftWidths[0] - elemWidth) + "px";
        break;
    default:
        break;
}