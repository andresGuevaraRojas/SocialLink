import andresPicture from '../images/andx.jpg'
import pokedex from "../images/PokedexScreenCapture.jpeg"
import andresSea from "../images/andres-sea.jpg"
import jenniePicture from "../images/jennie.jpg"
import mountainsLake from "../images/mountains-lake.jpg"
import reforestation from "../images/reforestation.jpg"
import volunteerA from "../images/volunteer-a.jpg"
import volunteerB from "../images/volunteer-b.jpg"
import volunteerC from "../images/volunteer-c.jpg"

type UserLink = {
    span: number,
    link: string,
    text: string,
    image?: string | ImageMetadata
}

type UserSocial = {
    icon: string,
    link: string
}

type UserProfile = {
    id:string
    name: string,
    picture: string | ImageMetadata,
    text: string,
    links: UserLink[],
    social: UserSocial[]
}

export function getUsersProfiles(): UserProfile[] {
    return [
        {
            id:"andx",
            name: "Andrés Guevara",
            picture: andresPicture,
            text: "Js ❤️ Developer",
            links: [                
                {
                    span: 3,
                    link: "https://andresguevararojas.github.io/PokedexWeb/",
                    text: "Watch my pokedex",
                    image: pokedex
                },                                   
                {
                    span: 3,
                    link: "https://github.com/andresGuevaraRojas/UsersApp",
                    text: "App React Native"
                },
                {
                    span: 3,
                    link: "https://andresguevararojas.github.io/SocialSeaFrontend/",
                    text: "Basic React"
                },
                {
                    span: 3,
                    link: "https://github.com/andresGuevaraRojas/UsersApp",
                    text: "App React Native"
                },
                {
                    span: 3,
                    link: "https://www.instagram.com/p/CdW3BV2Ouk0dwuFrCyPwsQNq7MiZEHpXgjlmLA0/",
                    text: "My last photo",
                    image: andresSea
                },                          
            ],
            social: [
                {
                    icon: "instagram-line",
                    link: "https://www.instagram.com/andres_gvara/"
                },
                {
                    icon: "github-fill",
                    link: "https://github.com/andresGuevaraRojas"
                }, 
                {
                    icon: "facebook-circle-fill",
                    link: "https://www.facebook.com"
                },                
                {
                    icon: "tiktok-line",
                    link: "https://www.tiktok.com"
                },
                {
                    icon: "twitter-x-line",
                    link: "https://www.x.com"
                },

            ]
        },
        {
            id:"jennie",
            name: "Jennie Nichols",
            picture: jenniePicture,
            text: "Photographer 📷 and lover of nature",
            links: [
                {
                    span: 3,
                    link: "#",
                    text: "My last photograph",
                    image: mountainsLake
                }, 
                {
                    span: 3,
                    link: "#",
                    text: "Last reforestation campain",
                    image: reforestation
                },               
                {
                    span: 3,
                    link: "#",
                    text: "Save the forest"
                },
                {
                    span: 3,
                    link: "#",
                    text: "Cleaning the ocean"
                },               
                {
                    span: 1,
                    link: "#",
                    text: "Volunteer A",
                    image: volunteerA
                },
                {
                    span: 1,
                    link: "x.com",
                    text: "Volunteer B",
                    image: volunteerB
                },  
                {
                    span: 1,
                    link: "x.com",
                    text: "Volunteer C",
                    image: volunteerC
                },                      
            ],
            social: [
                {
                    icon: "facebook-circle-fill",
                    link: "https://www.x.com"
                },
                {
                    icon: "instagram-line",
                    link: "https://www.facebook.com"
                },               
                {
                    icon: "tiktok-line",
                    link: "https://www.tiktok.com"
                },
                               
                {
                    icon: "twitter-x-line",
                    link: "https://www.tiktok.com"
                },
            ]
        }
    ]
}