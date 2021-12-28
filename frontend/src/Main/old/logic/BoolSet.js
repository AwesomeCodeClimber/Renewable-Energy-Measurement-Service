export default function boolSet(new_state,
    delta,
    left,
    top,
    opacity) {

    var directionLeft = delta.left >= 0 ? true : false;
    var directionTop = delta.top >= 0 ? true : false;
    var directionOpacity = delta.opacity >= 0 ? true : false;

    var moveLeft = true;
    var moveTop = true;
    var changeOpacity = true;

    if (directionLeft && directionTop && directionOpacity) {
        moveLeft = left < new_state.left ? true : false;
        moveTop = top < new_state.top ? true : false;
        changeOpacity = opacity < new_state.opacity ? true : false;
    }
    else if (directionLeft && directionTop && !directionOpacity) {
        moveLeft = left < new_state.left ? true : false;
        moveTop = top < new_state.top ? true : false;
        changeOpacity = opacity > new_state.opacity ? true : false;
    }
    else if (directionLeft && !directionTop && directionOpacity) {
        moveLeft = left < new_state.left ? true : false;
        moveTop = top > new_state.top ? true : false;
        changeOpacity = opacity < new_state.opacity ? true : false;
    }
    else if (directionLeft && !directionTop && !directionOpacity) {
        moveLeft = left < new_state.left ? true : false;
        moveTop = top > new_state.top ? true : false;
        changeOpacity = opacity > new_state.opacity ? true : false;
    }
    else if (!directionLeft && directionTop && directionOpacity) {
        moveLeft = left > new_state.left ? true : false;
        moveTop = top < new_state.top ? true : false;
        changeOpacity = opacity < new_state.opacity ? true : false;
    }
    else if (!directionLeft && directionTop && !directionOpacity) {
        moveLeft = left > new_state.left ? true : false;
        moveTop = top < new_state.top ? true : false;
        changeOpacity = opacity > new_state.opacity ? true : false;
    }
    else if (!directionLeft && !directionTop && directionOpacity) {
        moveLeft = left > new_state.left ? true : false;
        moveTop = top > new_state.top ? true : false;
        changeOpacity = opacity < new_state.opacity ? true : false;
    }
    else {
        moveLeft = left > new_state.left ? true : false;
        moveTop = top > new_state.top ? true : false;
        changeOpacity = opacity > new_state.opacity ? true : false;
    }

    return ([moveLeft, moveTop, changeOpacity]);
};
