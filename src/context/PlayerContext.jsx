import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../assets/assets'

export const MusicContext = createContext()

// context provider
const PlayerContext = (props) => {

    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()

    const [song, setSong] = useState(songsData[0])
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    // for song duration and seekbar
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {

                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100))+ '%'

                setDuration({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        },1000)
    },[audioRef])

    // play song
    const play = () => {
        audioRef.current.play()
        setIsPlaying(true)
    }

    // pause song
    const pause = () => {
        audioRef.current.pause()
        setIsPlaying(false)
    }

    // select specific song
    const playSpecific = async (id) => {
        await setSong(songsData[id])
        audioRef.current.play()
        setIsPlaying(true)
    }
    
    // previous song
    const prev = async (id) => {
        if(song.id > 0){
            await setSong(songsData[id-1])
            audioRef.current.play()
            setIsPlaying(true)
        }
    }

    // next song
    const next = async (id) => {
        if(song.id < songsData.length - 1){
            await setSong(songsData[id+1])
            audioRef.current.play()
            setIsPlaying(true)
        }
    }

    // seek bar
    const seek = (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }

    const contextValue = {    // whatever function or state created here, we can access it in any other component.
        audioRef,
        seekBg,
        seekBar,
        song, setSong,
        isPlaying, setIsPlaying,
        duration, setDuration,
        play,pause,playSpecific,
        prev,next, seek
    }

  return (
    <>
        <MusicContext.Provider value={contextValue}>
            {props.children}
        </MusicContext.Provider>
    </>
  )
}

export default PlayerContext