export function formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    let mm = date.getMinutes().toString();
    let ss = date.getSeconds().toString();
    let sss = date.getMilliseconds().toString();
    if (+mm < 10) {
      mm = `0${mm}`
    }
    if (+ss < 10) {
      ss = `0${ss}`
    }
    if (+sss < 100) {
      sss = `${sss}0`;
    }
    return `${mm}:${ss}:${sss}`;
  }
