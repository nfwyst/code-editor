import { CSSProperties } from "react"

const icons = [
  'devicon-filezilla-plain',
  'devicon-css3-plain',
  'devicon-go-original-wordmark',
  'devicon-html5-plain',
  'devicon-java-plain',
  'devicon-javascript-plain',
  'devicon-php-plain',
  'devicon-python-plain',
  'devicon-react-original',
  'devicon-ruby-plain',
  'devicon-typescript-plain'
]

const LanguageList = () => {
  const style: CSSProperties = {
    padding: '10px',
    width: '50px',
    height: '50px',
    fontSize: '50px',
    cursor: 'pointer',
    color: 'burlywood'
  }

  return (
    <div>
      {icons.map(icon => {
        return (
          <i key={icon} style={style} className={icon}></i>
        )
      })}
    </div>
  )
}

export default LanguageList
