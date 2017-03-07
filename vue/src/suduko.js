export default class Suduko {
  constructor(arr) {
    window.console.log(arr);
    if (arr.length === 81) {
      this.panes = arr;
    }
    // const init = [8, 3, 7, 4, 6, 1, 5, 2, 9, 5, 4, 1, 9, 2, 8, 7, 3, 6, 2, 6, 9, 5, 3, 7, 4, 1, 8, 9, 5, 4, 6, 8, 3, 2, 7, 1, 7, 2, 8, 1, 9, 5, 3, 6, 4, 3, 1, 6, 7, 4, 2, 8, 9, 5, 4, 7, 5, 3, 1, 9, 6, 8, 2, 1, 8, 3, 2, 5, 6, 9, 4, 7, 6, 9, 2, 8, 7, 4, 1, 5, 3]
    this.suduGroup = new Array(27);
    this.initGroup();
    // this.panes = init
  }

  initGroup() {
    const arr = new Array(9);
    this.suduGroup.fill(arr);
  }

  completeSudu() {
    // window.console.log(this.suduGroup)
    for (let k = 0; k < 27; k++) {
      for (let m = 0; m < 9; m++) {
        switch (true) {
        case k < 9:
          this.suduGroup[k][m] = this.panes[9 * k + m];
          break;
        case k < 18:
          this.suduGroup[k][m] = this.panes[m * 9 + k - 9];
          break;
        case k < 27:
          this.suduGroup[k][m] = this.panes[parseInt((k - 18) / 3) * 3 * 9 + (k - 18) % 3 * 3 + m % 3 + parseInt(m / 3) * 9];
          break;
        }
      }
    }
    return this;
  }

  isMiniSudu(arr) {
    arr.sort((a, b) => a > b ? 1 : -1);
    return arr.join('') === '123456789';
  }

  checkSudu() {
    return this.suduGroup.every(value => this.isMiniSudu(value));
  }
}
