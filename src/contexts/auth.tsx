import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type AutheResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
    bowl: string;

    // TEAM 1

    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    img6: string;
    img7: string;
    img8: string;
    img9: string;
    img10: string;
    img11: string;
    img12: string;

    // TEAM 2

    img21: string;
    img22: string;
    img23: string;
    img24: string;
    img25: string;
    img26: string;
    img27: string;
    img28: string;
    img29: string;
    img30: string;
    img31: string;
    img32: string;


    // TEAM 3

    img41: string;
    img42: string;
    img43: string;
    img44: string;
    img45: string;
    img46: string;
    img47: string;
    img48: string;
    img49: string;
    img50: string;
    img51: string;
    img52: string;


    // TEAM 4

    img61: string;
    img62: string;
    img63: string;
    img64: string;
    img65: string;
    img66: string;
    img67: string;
    img68: string;
    img69: string;
    img70: string;
    img71: string;
    img72: string;

    handleBowl: (newBowl: string) => void;
    luckPlay: (numberBowl: number) => void;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
    children: ReactNode;
}

export function AuthProvider(props: AuthProvider) {
    const signInUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=473ca6385c1f1ae4800b';
    const [user, setUser] = useState<User | null>(null)
    const [bowl, setBowl] = useState('')

    // TEAM 1
    const [img1, setImg1] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img2, setImg2] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img3, setImg3] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img4, setImg4] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img5, setImg5] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img6, setImg6] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img7, setImg7] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img8, setImg8] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img9, setImg9] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img10, setImg10] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img11, setImg11] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img12, setImg12] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')

    //TEAM 2 
    const [img21, setImg21] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img22, setImg22] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img23, setImg23] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img24, setImg24] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img25, setImg25] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img26, setImg26] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img27, setImg27] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img28, setImg28] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img29, setImg29] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img30, setImg30] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img31, setImg31] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img32, setImg32] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')

    //TEAM 3
    const [img41, setImg41] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img42, setImg42] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img43, setImg43] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img44, setImg44] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img45, setImg45] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img46, setImg46] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img47, setImg47] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img48, setImg48] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img49, setImg49] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img50, setImg50] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img51, setImg51] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img52, setImg52] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')

    //TEAM 4
    const [img61, setImg61] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img62, setImg62] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img63, setImg63] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img64, setImg64] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img65, setImg65] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img66, setImg66] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img67, setImg67] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img68, setImg68] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img69, setImg69] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img70, setImg70] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img71, setImg71] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')
    const [img72, setImg72] = useState('https://uploadnodejs.s3.amazonaws.com/3eb6cc586108e24ce0135156d8d37258-grama.jpg')

    async function signIn(githubCode: string) {
        const response = await api.post<AutheResponse>('/authenticate', {
            code: githubCode,
        })

        const { token, user } = response.data;

        localStorage.setItem('@dowhile:token', token)
        api.defaults.headers.common.authorization = `Bearer ${token}`

        setUser(user)
    }

    function handleBowl(newBowl: string) {
        setBowl(newBowl)
    }


    async function luckPlay(numberBowl: number) {
        const { data } = await api.get(`/luck?bowl=${bowl}`)
        const { img } = data;

        switch (numberBowl) {
            case 0:
                setImg1(img)
                break;
            case 1:
                setImg21(img)
                break;
            case 2:
                setImg41(img)
                break;
            case 3:
                setImg61(img)
                break;
            case 4:
                setImg2(img)
                break;
            case 5:
                setImg22(img)
                break;
            case 6:
                setImg42(img)
                break;
            case 7:
                setImg62(img)
                break;
            case 8:
                setImg3(img)
                break;
            case 9:
                setImg23(img)
                break;
            case 10:
                setImg43(img)
                break;
            case 11:
                setImg63(img)
                break;

            // TEAM 2
            case 12:
                setImg4(img)
                break;
            case 13:
                setImg24(img)
                break;
            case 14:
                setImg44(img)
                break;
            case 15:
                setImg64(img)
                break;
            // case 16:
            //     setImg25(img)
            //     break;
            // case 17:
            //     setImg26(img)
            //     break;
            // case 18:
            //     setImg27(img)
            //     break;
            // case 19:
            //     setImg28(img)
            //     break;
            // case 20:
            //     setImg29(img)
            //     break;
            // case 21:
            //     setImg30(img)
            //     break;
            // case 22:
            //     setImg31(img)
            //     break;
            // case 23:
            //     setImg32(img)
            //     break;
        }

    }



    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=');

        if (hasGithubCode) {
            const [urlWithGithubCode, githubCode] = url.split('?code=')

            window.history.pushState({}, '', urlWithGithubCode)

            signIn(githubCode)
        }
    })

    useEffect(() => {
        const token = localStorage.getItem('@dowhile:token')

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get<User>('/profile').then(response => {
                setUser(response.data)
            })
        }

    }, [])

    return (
        <AuthContext.Provider value={{ signInUrl, user, handleBowl, bowl, luckPlay, 
            img1,
            img2, 
            img3, 
            img4, 
            img5, 
            img6, 
            img7, 
            img8, 
            img9, 
            img10, 
            img11,
            img12,
            img21,
            img22,
            img23,
            img24,
            img25,
            img26,
            img27,
            img28,
            img29,
            img30,
            img31,
            img32,
            img41,
            img42,
            img43,
            img44,
            img45,
            img46,
            img47,
            img48,
            img49,
            img50,
            img51,
            img52,
            img61,
            img62,
            img63,
            img64,
            img65,
            img66,
            img67,
            img68,
            img69,
            img70,
            img71,
            img72
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}