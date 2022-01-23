import avatar01 from "./Assets/userAvatar01.svg";
import avatar02 from "./Assets/userAvatar02.svg";
import avatar03 from "./Assets/userAvatar03.svg";
import avatar04 from "./Assets/userAvatar04.svg";
import avatar05 from "./Assets/userAvatar05.svg";
import avatar06 from "./Assets/userAvatar06.svg";
import avatar07 from "./Assets/userAvatar07.svg";
import avatar08 from "./Assets/userAvatar08.svg";
import avatar09 from "./Assets/userAvatar09.svg";
import analytics from './Assets/statistics.png'
import nerdemoji from './Assets/nerd emoji.png'
import newspaper from './Assets/newspaper.png'
import darkmode from './Assets/solid-black-sun-symbol.png'

export const avatars = [
    avatar01,
    avatar02,
    avatar03,
    avatar04,
    avatar05,
    avatar06,
    avatar07,
    avatar08,
    avatar09
]




export const features = [
    {
        id: 1,
        iconUrl: analytics,
        title: 'Analytics',
        body: 'We constantly monitor your audience as it grows -- so you can Tweet when your followers are most likely to be online and ready to engage with your content.',
    },
    {
        id: 2,
        iconUrl: nerdemoji,
        title: 'Smart Analyzer',
        body: 'Chirp automatically recognizes your followers most active times and automatically sends you notifications if you are missing out on an opportunity.',
    },
    {
        id: 3,
        iconUrl: newspaper,
        title: 'Scheduled Your Tweets',
        body: 'Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read.',
    },
    {
        id: 4,
        iconUrl: darkmode,
        title: 'Dark Mode',
        body: 'Friendly on the eyes, no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease at all times.',
    }
]

export const testimonials = [
    {
        id: 1,
        name: 'Sara May',
        username: 'sara_may',
        avatar: avatar01,
        tweet: "I just tried out @chirp and it's amazing, love all the analytics I can see.",
        likes: 2,
        date: 'March 2, 2021'
    },
    {
        id: 2,
        name: "Jack Scott",
        username: "jackscott_",
        avatar: avatar06,
        tweet: "I initially started using Chirp to support the co-founders as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.",
        likes: 32,
        date: 'March 2, 2021'
    },
    {
        id: 3,
        name: 'Jessica May',
        username: 'jmay98',
        avatar: avatar02,
        tweet: "Absolutely love everything about Chirp, from the design to how everything works smoothly.",
        likes: 221,
        date: 'March 2, 2021'       
    }
]
