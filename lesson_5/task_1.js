/* 1.
Создать функцию, генерирующую шахматную доску. 
Можно использовать любые html-теги. 
Доска должна быть верно разлинована на черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/

drawChessBoard(60);

function drawChessBoard(baseSize = 10) {

    const wrap = document.body.appendChild(document.createElement('div'));
    wrap.className = 'wrap';

    const head = wrap.appendChild(document.createElement('div'));
    head.className = 'boardLabelsS';

    const boardLineWrap = wrap.appendChild(document.createElement('div'));
    boardLineWrap.className = 'boardLineWrap';

    const left = boardLineWrap.appendChild(document.createElement('div'));
    left.className = 'boardLabelsN';

    const chessBoard = boardLineWrap.appendChild(document.createElement('div'));
    chessBoard.className = 'grid8x8';
    for (i = 1; i <= 64; i++) {
        const f = chessBoard.appendChild(document.createElement('div'))
        f.classList.add('chessField');
        if ((i + Math.ceil(i / 8) % 2) % 2) f.classList.add('bgBlack');
    };

    const right = boardLineWrap.appendChild(document.createElement('div'));
    right.className = 'boardLabelsN';

    const foot = wrap.appendChild(document.createElement('div'));
    foot.className = 'boardLabelsS';

    LabelsS = document.querySelectorAll('.boardLabelsS');
    LabelsS.forEach(el => {
        for (i = 0; i <= 7; i++) {
            const arrLabelsS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            const tmp = el.appendChild(document.createElement('div'));
            tmp.className = 'boardLabelsSField';
            tmp.textContent = arrLabelsS[i];
        }
    })

    LabelsN = document.querySelectorAll('.boardLabelsN');
    LabelsN.forEach(el => {
        for (i = 1; i <= 8; i++) {
            const tmp = el.appendChild(document.createElement('div'));
            tmp.className = 'boardLabelsNField';
            tmp.textContent = i;
        }
    });

    leftStyle = getComputedStyle(left);
    LabelsS.forEach(el => {
        el.style.marginLeft = leftStyle.width;
    });
}