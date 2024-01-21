import { supabase } from "./dbConfig";

async function getChats() {
    const { data } = await supabase.from("chats").select();
    return data;
}

async function getUsers() {
    const { data } = await supabase.from("users").select();
    return data;
}

async function getFarmerById(id: string) {
    const { data } = await supabase.from("farm").select().eq("id", Number(id));
    return data;
}

export { getChats, getUsers, getFarmerById };