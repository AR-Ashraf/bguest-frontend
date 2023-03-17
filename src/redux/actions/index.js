export const menuAction = (menuState) => {
    return {
        type: 'MENU',
        menuState
    }
}

export const videoPreviewAction = (videoPreviewState) => {
    return {
        type: 'VIDEO',
        videoPreviewState
    }
}

export const tokenAction = (tokenState) => {
    return {
        type: 'TOKEN',
        tokenState
    }
}

export const dateViewAction = (dateViewState) => {
    return {
        type: 'DATE_VIEW',
        dateViewState
    }
}

export const guestDataAction = (guestDataState) => {
    return {
        type: 'GUESTDATA',
        guestDataState
    }
}