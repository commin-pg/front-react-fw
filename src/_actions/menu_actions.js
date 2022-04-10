export const CHANGE_ACTIVE_MENU = 'CHANGE_ACTIVE_MENU';

export function changeActiveMenu(payload) {
    console.log("CHANGE ACTIVW MENU ACTION : ", payload)
    return {
        type: CHANGE_ACTIVE_MENU,
        payload
    }
}