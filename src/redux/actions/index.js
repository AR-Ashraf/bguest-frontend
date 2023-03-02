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