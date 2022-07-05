import { getDate, getTime } from './utils.js'

const currentTime = () => {
    const day = new Date()
    const today = getDate({ day })
    const time = getTime({ day })
    
    console.log(`오늘은 ${today} ${time}입니다.`)
}

currentTime()