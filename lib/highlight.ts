import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'
import python from 'highlight.js/lib/languages/python'

const highlight = () => {
	hljs.registerLanguage('javascript', javascript)
	hljs.registerLanguage('typescript', typescript)
	hljs.registerLanguage('css', css)
	hljs.registerLanguage('python', python)
	hljs.highlightAll()
}

export default highlight
