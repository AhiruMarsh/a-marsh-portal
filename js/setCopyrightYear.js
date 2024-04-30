/*
    setCopyrightYear.js
    Copyright表記整形｀
*/

function setCopyrightYear(begin_year) {
    // 現在年を取得
    const current_year = new Date().getFullYear();
    
    // 現在年と同一の場合、そのまま出力
    // 現在年と異なる場合、開始年と現在年を一緒に出力
    if (begin_year == current_year) {
        return document.write(`${current_year}`)
    } else if (begin_year < current_year) {
        return document.write(`${begin_year} - ${current_year}`)
    };

    // 何も当てはまらない場合、そのまま出力
    return document.write(`${begin_year}`);
};