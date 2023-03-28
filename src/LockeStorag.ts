export function getCrudData(): string | null {
    let getM = localStorage.getItem('crud');
    return getM;
} // Exported localStorage getdata function

export function setCrudData(putM: string) {
    localStorage.setItem('crud', putM);
} // Exported localStorage setdata function