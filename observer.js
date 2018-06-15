class Observer {
  constructor() {
    this.storage = Object.create(null);
  }
  pub(key, value) {
    new Promise((reslove, reject) => {
      if (!this.storage[key]) {
        Object.defineProperty(this.storage, key, {
          enumerable: true,
          writable: false,
          configurable: true,
          value: {
            value,
            subEvents: [],
          },
        });
        console.log(this.storage);

      } else {
        let self = this;
        Object.defineProperty(self.storage[key], 'value', {
          get() {
            return value;
          },
          set(value) {
            let {
              subEvents
            } = self.storage[key]

            if (subEvents.length) {
              subEvents.forEach(element => {
                element && element(value);
              });
            }
          }
        })
        this.storage[key].value = value
      }
    })
  }

  sub(key, event) {
    if (!this.storage[key]) {
      Object.defineProperty(this.storage, key, {
        enumerable: true,
        writable: false,
        configurable: true,
        value: {
          value: null,
          subEvents: [event]
        }
      })
    } else {
      this.storage[key].subEvents.push(event);
      this.storage[key].subEvents.forEach(elem => {
        let {
          value
        } = this.storage[key];

        elem && elem(value);
      })
    }
  }
}

window.Observer = Observer;