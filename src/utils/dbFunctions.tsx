import { supabase } from "./dbConfig";

async function getChats() {
    const { data } = await supabase.from("chats").select();
    return data;
}

async function getUsers() {
    const { data } = await supabase.from("users").select();
    return data;
}

async function getAllFarms() {
    const { data } = await supabase.from('farm').select();

    return data;
}

export { getChats, getUsers, getAllFarms as getFarms };