import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/dbConfig';
import { Stack, TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { PasswordInput } from '@mantine/core';

export default function Login() {
    const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
    const [user, setUser] = useState<any>(null);
    const signUp = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: 'example@email.com',
            password: 'example-password',
        });
        console.log(data, error);
    }

    const signIn = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: 'example@email.com',
            password: 'example-password',
        });
        console.log(data, error);
        const { data: { user } } = await supabase.auth.getUser()
        setUser(data);

        console.log(user);
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        console.log(error);
    }

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className="flex items-center justify-center">
            <div className='flex flex-col items-center justify-center'>
                <h1 className="text-3xl font-bold mb-4">Welcome 👋</h1>
                <Stack>
                    <TextInput
                        leftSectionPointerEvents="none"
                        leftSection={icon}
                        label="Your email"
                        placeholder="Your email"
                    />
                    <PasswordInput
                        label="Input label"
                        description="Input description"
                        placeholder="Input placeholder"
                    />
                </Stack>
                <button onClick={signUp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-36 m-2 mt-10">
                    Sign Up</button>
                <button onClick={signIn} className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-36 m-2">Sign in</button>
                {/* <button onClick={signOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-36 m-2">Sign out</button> */}
            </div>
        </div>
    );
}

// function Login() {
//     const [authState, setAuthState] = useState({});

//     useEffect(() => {
//         const { data: authListener } = supabase.auth.onAuthStateChange(
//             (event, session) => {
//                 setAuthState({ event, session });
//             }
//         );

//         return () => {
//             authListener.unsubscribe();
//         };
//     }, []);

//     const signInWithGoogle = () => {
//         supabase.auth.signInWithOAuth({ provider: 'google' });
//     };

//     const signOut = () => {
//         supabase.auth.signOut();
//     };

//     return (
//         <div>
//             <button onClick={signInWithGoogle}>Sign in with Google</button>
//             <button onClick={signOut}>Sign out</button>
//         </div>
//     );
// }

// export default Login
// // const login = async () => {
// //     await supabase.auth.signInWithOAuth({
// //         provider: 'google',
// //     });
// // }
// // return (
// //     <div className="flex items-center justify-center">
// //         <div className='flex flex-col items-center justify-center'>
// //             <h1 className="text-5xl font-bold">HealthHelper</h1>
// //             <button onClick={login} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
// //                 Login with Google
// //             </button>
// //         </div>
// //     </div>
// // )