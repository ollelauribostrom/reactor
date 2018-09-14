import SquareServiceWorker from './SquareService.worker';

class SquareService {
  nextId: number;

  worker: any;

  workerCallbacks: Array<any>;

  constructor() {
    this.nextId = 0;
    this.worker = new SquareServiceWorker();
    this.workerCallbacks = [];
    this.worker.addEventListener('message', ({ data }) => {
      this.workerCallbacks[data.id].fn(data);
      this.workerCallbacks[data.id] = null;
    });
  }

  postMessage(data) {
    return new Promise((resolve, reject) => {
      this.workerCallbacks.push({
        id: this.nextId,
        fn: response => {
          if (response.error) {
            reject(response);
          }
          resolve(response);
        }
      });
      this.worker.postMessage({
        id: this.nextId,
        ...data
      });
      this.nextId += 1;
    });
  }

  async square(n: number) {
    const response = await this.postMessage({ value: n });
    return response.squared;
  }
}

const service = new SquareService();
export default service;
