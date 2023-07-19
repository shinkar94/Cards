import s from './select.module.scss'
import { useState } from 'react'
import upSvg from '../../../assets/svg/up.svg'
import downSvg from '../../../assets/svg/down.svg'

type OptionType = {
  id: number
  value: string
}
export const SelectDemo = () => {
  const options: OptionType[] = [
    { id: 1, value: 'Select-box1' },
    { id: 2, value: 'Select-box2' },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option)
    setIsOpen(false)
  }
  return (
    <div className={s.selectContent}>
      <div className={s.selectHeader} onClick={toggleOpen}>
        <span>{selectedOption ? selectedOption.value : 'Select-box'}</span>
        {isOpen ? <img src={upSvg} alt="up" /> : <img src={downSvg} alt="down" />}
      </div>
      {isOpen && (
        <ul className={s.optionsContainer}>
          {options.map(option => {
            return (
              <li
                key={option.id}
                className={`option ${selectedOption ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option.value}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
