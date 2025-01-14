import React from 'react'
import styles from '../styles/Themes.module.css'
import theme1 from '../assets/images/theme1.png'
import theme2 from '../assets/images/theme2.png'
import theme3 from '../assets/images/theme3.png'
import theme4 from '../assets/images/theme4.png'
import theme5 from '../assets/images/theme5.png'
import theme6 from '../assets/images/theme6.png'
import theme7 from '../assets/images/theme3.png'
import theme8 from '../assets/images/theme3.png'
import theme9 from '../assets/images/theme3.png'
import theme10 from '../assets/images/theme3.png'
import { useState, useContext, useEffect } from 'react'
import { authAxios } from '../utils/Api'
import { ProfileContext } from '../context/ProfileModal'

const Themes = () => {
  const [mode, setMode] = useState(() => localStorage.getItem('mode'))

  const [color, setColor] = useState('light')

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('darkmode')
      localStorage.setItem('mode', 'dark')
    } else {
      document.body.classList.remove('darkmode')
      localStorage.setItem('mode', 'light')
    }
  }, [mode])

  const { user } = useContext(ProfileContext)

  const [dataState, setDataState] = useState({
    // channel_hurdle_notification: channel_hurdle,
    sync_with_os: null,
    direct_messages_mentions_and_network: ''
  })

  const setData = () => {
    authAxios
      .patch(
        `/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/settings`,
        {
          settings: {
            themes: dataState
          }
        }
      )
      .then(res => {
        console.log(res)
        setState({ loading: false })
      })
      .catch(err => {
        console.log(err?.response?.data)
        setState({ loading: false })
      })
  }
  const [state, setState] = useState({
    name: 'React',
    value: 'duration'
  })

  useEffect(() => {
    setData()
    console.log(dataState)
    console.log(user)
  }, [dataState])

  //const [isChecked, setIsChecked] = useState(false)

  // handleSubmit function on the form
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   console.log(isChecked)
  // }

  // React.useEffect(() => {
  //   fetch('https://api.zuri.chat/', {
  //     method: 'POST',
  //     headers: {
  //       // authorization if any
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(isChecked)
  //   })
  //     .then(res => console.log(res))
  //     .catch(error => console.log(error))
  // })

  return (
    <body className={styles.darkmode}>
      <div className={styles.themeCont}>
        <div className={styles.title}>
          <div className={styles.text}>
            Change the appearance of Slack across all of your workspaces.
          </div>
        </div>
        <div className={styles.sync}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="sync"
              onClick={() => {
                setDataState({ sync_with_os: 'yes' })
                setData()
              }}
            />
          </div>
          <div className={styles.os}>Sync with OS setting</div>
        </div>
        <div className={styles.direct}>
          <div className={styles.radio}>
            <input
              type="checkbox"
              name="sync"
              onClick={() => {
                setDataState({ direct_messages_mentions_and_network: 'yes' })
                setData()
              }}
            />
          </div>
          <div className={styles.mention}>
            Direct messages, mentions &amp; network
          </div>
        </div>
        <div className={styles.text2}>
          Automatically switch between light and dark themes
        </div>
        <div className={styles.text2b}>when your system does.</div>
        <a
          className="cursor-pointer"
          onClick={() => setMode(mode => (mode === 'dark' ? 'light' : 'dark'))}
        >
          <small>{mode === 'dark' ? 'Light' : 'Dark'} Mode</small>
        </a>
        <div className={styles.img}>
          <img src={theme1} alt="theme1" className={styles.theme1} />
        </div>
        <div className={styles.img2}>
          <img src={theme2} alt="theme2" className={styles.theme2} />
        </div>
        <div className={styles.customize}>
          <div className={styles.text3}>Colors</div>
          <div className={styles.custom}>
            Customize the look of your workspace. Feeling
          </div>
          <div className={styles.custom2}>adventurous?</div>
          <div className={styles.create}>Create a custom theme</div>
          <div className={styles.true}>Tried and true</div>
        </div>
        <div className={styles.set1}>
          <div className={styles.img3}>
            <img src={theme3} alt="theme3" className={styles.theme3} />
          </div>
          <div className={styles.img4}>
            <img src={theme4} alt="theme4" className={styles.theme4} />
          </div>
        </div>
        <div className={styles.all}>
          <div className={styles.arrow}>↓</div>
          <div className={styles.show}>Show all classic themes</div>
        </div>
        <div className={styles.clean}>Clean and minimal</div>
        <div className={styles.set2}>
          <div className={styles.img5}>
            <img src={theme5} alt="theme5" className={styles.theme5} />
          </div>
          <div className={styles.img6}>
            <img src={theme6} alt="theme6" className={styles.theme6} />
          </div>
        </div>
        <div className={styles.set3}>
          <div className={styles.img7}>
            <img src={theme7} alt="theme7" className={styles.theme7} />
          </div>
          <div className={styles.img8}>
            <img src={theme8} alt="theme8" className={styles.theme8} />
          </div>
        </div>
        <div className={styles.set4}>
          <div className={styles.bottom}>
            <div className={styles.img9}>
              <img src={theme9} alt="theme9" className={styles.theme9} />
            </div>
            <div className={styles.img10}>
              <img src={theme10} alt="theme10" className={styles.theme10} />
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Themes
