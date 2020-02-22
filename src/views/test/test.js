/* eslint-disable no-console */

import moment from 'moment'
import Router from '../../router/index'

export default {
  name: 'test',
  data () {
    return {
      timer: {
        hours: '',
        minutes: '',
        seconds: ''
      },
      duration: '',
      days: '',
      stopTimer: false
    }
  },
  methods: {
    startTimer () {
      const startTime = moment().format('YYYY-MM-DD HH:mm:ss')
      const endTime = moment('2020-02-22T17:12:40+05:30')
      const diff = endTime.diff(startTime)
      console.log('diff', diff)
      if (diff === 0) {
        this.stopTimer = true
        Router.push({ path: '/test/test1' })
      }

      // calculate total duration
      this.timer.hours = moment.utc(diff).format('HH')
      this.timer.minutes = moment.utc(diff).format('mm')
      this.timer.seconds = moment.utc(diff).format('ss')
      this.days = '0' + endTime.diff(startTime, 'days')
      console.log(moment(this.duration).format('HH:mm:ss'))
      // this.timer = moment().format('h:mm:ss')
    }
  },
  mounted () {
    setInterval(() => {
      this.startTimer()
    }, 100)
    const PI2 = Math.PI * 2
    const random = (min, max) => Math.random() * (max - min + 1) + min | 0
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const timestamp = _ => new Date().getTime()
    const canvas = document.getElementById('birthday')
    const ctx = canvas.getContext('2d')
    class Firework {
      constructor (x, y, targetX, targetY, shade, offsprings) {
        this.dead = false
        this.offsprings = offsprings

        this.x = x
        this.y = y
        this.targetX = targetX
        this.targetY = targetY

        this.shade = shade
        this.history = []
      }

      update (delta) {
        if (this.dead) return

        const xDiff = this.targetX - this.x
        const yDiff = this.targetY - this.y
        if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
          this.x += xDiff * 2 * delta
          this.y += yDiff * 2 * delta

          this.history.push({
            x: this.x,
            y: this.y
          })

          if (this.history.length > 20) this.history.shift()
        } else {
          if (this.offsprings && !this.madeChilds) {
            const babies = this.offsprings / 2
            for (let i = 0; i < babies; i++) {
              const targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
              const targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))
            }
          }
          this.madeChilds = true
          this.history.shift()
        }

        if (this.history.length === 0) this.dead = true
        else if (this.offsprings) {
          for (let i = 0; this.history.length > i; i++) {
            const point = this.history[i]
            ctx.beginPath()
            ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
            ctx.arc(point.x, point.y, 1, 0, PI2, false)
            ctx.fill()
          }
        } else {
          ctx.beginPath()
          ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
          ctx.arc(this.x, this.y, 1, 0, PI2, false)
          ctx.fill()
        }
      }
    }

    // container
    class Birthday {
      constructor () {
        this.resize()

        // create a lovely place to store the firework
        this.fireworks = []
        this.counter = 0
      }

      resize () {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        this.width = canvas.width = window.innerWidth
        const center = this.width / 2 | 0
        this.spawnA = center - center / 4 | 0
        this.spawnB = center + center / 4 | 0

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        this.height = canvas.height = window.innerHeight
        this.spawnC = this.height * 0.1
        this.spawnD = this.height * 0.5
      }

      onClick (evt) {
        const x = evt.clientX || evt.touches && evt.touches[0].pageX
        const y = evt.clientY || evt.touches && evt.touches[0].pageY

        const count = random(3, 5)
        for (let i = 0; i < count; i++) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          this.fireworks.push(new Firework(
            random(this.spawnA, this.spawnB),
            this.height,
            x,
            y,
            random(0, 260),
            random(30, 110)))
        }

        this.counter = -1
      }

      update (delta) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        ctx.globalCompositeOperation = 'hard-light'
        ctx.fillStyle = `rgba(20,20,20,${7 * delta})`
        ctx.fillRect(0, 0, this.width, this.height)

        ctx.globalCompositeOperation = 'lighter'
        for (const firework of this.fireworks) firework.update(delta)

        // if enough time passed... create new new firework
        this.counter += delta * 3 // each second
        if (this.counter >= 1) {
          this.fireworks.push(new Firework(
            random(this.spawnA, this.spawnB),
            this.height,
            random(0, this.width),
            random(this.spawnC, this.spawnD),
            random(0, 360),
            random(30, 110)))
          this.counter = 0
        }

        // remove the dead fireworks
        if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)
      }
    }

    let then = timestamp()

    const birthday = new Birthday()
    window.onresize = () => birthday.resize()
    document.onclick = evt => birthday.onClick(evt)
    document.ontouchstart = evt => birthday.onClick(evt);

    (function loop () {
      requestAnimationFrame(loop)

      const now = timestamp()
      const delta = now - then

      then = now
      birthday.update(delta / 1000)
    })()
  }
}
