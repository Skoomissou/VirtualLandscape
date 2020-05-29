import {AbstractForm} from './AbstractForm.js';

class Nuage extends AbstractForm {
    constructor(
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        fillColor = '',
        strokeColor = '',
        strokeWidth = 2,
        pesanteur = false
      )
         {
        super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur)
      }

/**  
 * Dessine la forme du Nuage
   */
  draw(ctx){
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor
    ctx.lineWidth = this.strokeWidth

    const MAX_HEAD = 80
    let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD : this.y
    ctx.arc(this.x, new_y, this.width, this.height,  2 * Math.PI)
    ctx.fillStyle = this.fillColor
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }

  /** 
   * premier Nuage
   */

    Nuage1(){
        const Nuage1 = new Nuage(500,65,50,0,'White','White',3,false)
        return Nuage1
    }
    Nuage2(){
        const Nuage2 = new Nuage(580,80,50,0,'White','White',3,false)
        return Nuage2
    }
    Nuage3(){
        const Nuage3 = new Nuage(550,70,50,0,'White','White',3,false)
        return Nuage3
    }
    Nuage4(){
      const Nuage4 = new Nuage(700,65,50,0,'White','White',3,false)
      return Nuage4
    }
    Nuage5(){
      const Nuage5 = new Nuage(750,80,50,0,'White','White',3,false)
      return Nuage5
    }
    Nuage6(){
      const Nuage6 = new Nuage(800,70,50,0,'White','White',3,false)
      return Nuage6
    }
    Nuage7(){
      const Nuage7 = new Nuage(1230,65,50,0,'White','White',3,false)
      return Nuage7
    }
    Nuage8(){
      const Nuage8 = new Nuage(1250,80,50,0,'White','White',3,false)
      return Nuage8
    }
    Nuage9(){
      const Nuage9 = new Nuage(1200,70,50,0,'White','White',3,false)
      return Nuage9
    }
    Nuage10(){
      const Nuage10 = new Nuage(1000,65,50,0,'White','White',3,false)
      return Nuage10
    }
    Nuage11(){
      const Nuage11= new Nuage(1020,80,50,0,'White','White',3,false)
      return Nuage11
    }
    Nuage12(){
      const Nuage12 = new Nuage(1050,70,50,0,'White','White',3,false)
      return Nuage12
    }
    



  /** 
   * Dessin de la forme de l'objet
   */
  static buildForms() {
    const bld = new Nuage()
    let forms = []
    forms.push(
        bld.Nuage1(),
        bld.Nuage2(),
        bld.Nuage3(),
        bld.Nuage4(),
        bld.Nuage5(),
        bld.Nuage6(),
        bld.Nuage7(),
        bld.Nuage8(),
        bld.Nuage9(),
        bld.Nuage10(),
        bld.Nuage11(),
        bld.Nuage12()
        )

    const builds = forms
    return builds

  }
  
}
export {Nuage}
