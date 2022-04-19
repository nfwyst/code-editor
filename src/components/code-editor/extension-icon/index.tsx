import React from 'react'

interface Props {
  extension?: string
}

const ExtensionIcon = ({ extension }: Props): JSX.Element => {
  const style = { width: 16, height: 16, display: 'inline-block' };

  switch (extension) {
    case 'js':
      return <i className="devicon-javascript-plain" style={style} />
    case 'ts':
      return <i className="devicon-typescript-plain" style={style} />
    case 'jsx':
      return <i className="devicon-react-original" style={style} />
    case 'tsx':
      return <i className="devicon-react-original" style={style} />
    case 'json':
      return <i className="devicon-confluence-original" style={style} />
    case 'md':
      return <i className="devicon-markdown-original" style={style} />
    case 'html':
      return <i className="devicon-html5-plain" style={style} />
    case 'css':
      return <i className="devicon-css3-plain" style={style} />
    case 'scss':
      return <i className="devicon-sass-original" style={style} />
    case 'less':
      return <i className="devicon-less-plain-wordmark" style={style} />
    case 'sass':
      return <i className="devicon-sass-original" style={style} />
    case 'php':
      return <i className="devicon-php-plain" style={style} />
    case 'java':
      return <i className="devicon-java-plain" style={style} />
    case 'py':
      return <i className="devicon-python-plain" style={style} />
    case 'go':
      return <i className="devicon-go-original-wordmark" style={style} />
    case 'rb':
      return <i className="devicon-ruby-plain" style={style} />
    default:
      return <i className="devicon-ie10-original" style={style} />
  }
}

export default ExtensionIcon
