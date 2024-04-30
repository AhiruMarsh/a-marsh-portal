/*
    theme.js
    簡易ダークモード対応
*/

// 現在のテーマを取得
function getCurrentTheme() {
  // 環境設定を取得
  const storedTheme    = localStorage.getItem('theme')

  // システム設定を取得 (未定義の場合: light)
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    
  // 優先度設定
  // システム設定よりも環境設定を優先する
  if (storedTheme) {
    return storedTheme
  
  } else {
    localStorage.setItem('theme', preferredTheme)
  }
    
  return preferredTheme
}

// テーマ切り替え
function switchTheme() {
  // 変更前のテーマ
  const currentTheme = getCurrentTheme();

  // 変更後のテーマ
  let newTheme
  switch (currentTheme) {
    case 'light':
      newTheme = 'dark'
      break;
    case 'dark':
      newTheme = 'light'
      break;
    default:
      newTheme = 'light'
      break; 
  }

  // 変更内容を反映し、環境設定に保存
  document.documentElement.setAttribute('data-bs-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}

// 画面初期化時に、反映
const initTheme = getCurrentTheme()
document.documentElement.setAttribute('data-bs-theme', initTheme);