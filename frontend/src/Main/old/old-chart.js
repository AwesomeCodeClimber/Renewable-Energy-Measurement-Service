
    const drawChartMount = (data) => {
        var leftWidths = [];
        data.map((item, index) => {

            const element = document.getElementsByClassName(`${Object.keys(item)[0]}-circle`)[0];
            element.innerHTML = `${item[Object.keys(item)]}<small>%</small>`;
            let elemWidth;
            if (item[Object.keys(item)] <= 10) {
                elemWidth = 150;
            }

            elemWidth = Math.sqrt(item[Object.keys(item)]) * 63;
            element.style.width = (elemWidth) + "px";
            element.style.height = (elemWidth) + "px";
            element.style.lineHeight = (elemWidth) + "px";
            const overlap_width = 70;

            let left, top;
            let opacity = 0;
            let id = null;

            /** Starting Point */
            switch (index) {
                case 0:
                    top = 550; left = (window.innerWidth - 127 - elemWidth) / 2;
                    leftWidths.push((window.innerWidth - 127 - elemWidth) / 2);
                    break;
                case 1:
                    top = 475; left = 127;
                    leftWidths.push(leftWidths[0] - elemWidth + overlap_width);
                    break;
                case 2:
                    top = 300; left = 127;
                    leftWidths.push(leftWidths[0] - elemWidth + overlap_width);
                    break;
                case 3:
                    top = 785; left = 150;
                    break;
                default:
                    break;
            }

            id = setInterval(frame, 0.1);

            function frame() {
                if (index == 0 && top == 235) {
                    clearInterval(id);
                }
                else if (index == 0 && top >= 235) {
                    top -= 315 / 300;
                    left == (window.innerWidth - 127 - elemWidth) / 2;
                    opacity += 0.67 / 300;
                    element.style.opacity = opacity;
                    element.style.top = top + "px";
                    element.style.left = left + "px";
                }
                else if (index == 1 && top <= 230) {
                    clearInterval(id);
                }
                else if (index == 1 && top >= 230) {
                    top -= 245 / 300;
                    left += (leftWidths[0] - elemWidth + overlap_width - 127) / 300;
                    opacity += 0.67 / 300;
                    element.style.opacity = opacity;
                    element.style.top = top + "px";
                    element.style.left = left + "px";
                }
                else if (index == 2 && left >= (leftWidths[1] - elemWidth + 50)) {
                    clearInterval(id);
                }
                else if (index == 2 && left < (leftWidths[1] - elemWidth + 50)) {
                    left += (leftWidths[1] - elemWidth + 50 - 127) / 300;
                    opacity += 0.67 / 300;
                    element.style.opacity = opacity;
                    element.style.left = left + "px";
                }
                else if (index == 3 && top <= 450) {
                    clearInterval(id);
                }
                else if (index == 3 && top >= 450) {
                    top -= 335 / 300;
                    left += (leftWidths[0] - elemWidth - 127) / 300;
                    opacity += 0.67 / 300;
                    element.style.opacity = opacity;
                    element.style.top = top + "px";
                    element.style.left = left + "px";
                }
            }


        })
    }
