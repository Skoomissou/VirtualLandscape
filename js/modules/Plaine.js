import {AbstractForm} from './AbstractForm.js';

class Plaine extends AbstractForm {
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
 * Dessine la forme du Plaine
   */
  draw(ctx){
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor
    ctx.lineWidth = this.strokeWidth

    const MAX_HEAD = 80
    let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD : this.y
    ctx.rect(this.x, new_y, this.width, this.height)

    ctx.fillStyle = this.fillColor

    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }

  /** 
   * premier Plaine
   */

    Plaine1(){
        const Plaine1 = new Plaine(10,0,150,50,'green','black',3,true)
        return Plaine1
    }
    Plaine2(){
        const Plaine2= new Plaine(100,0,300,100,'green','black',3,true)
        return Plaine2
    }
    Plaine3(){
        const Plaine3= new Plaine(250,0,600,60,'green','black',3,true)
        return Plaine3
    }
    Plaine4(){
        const Plaine4= new Plaine(350 ,0,600,80,'green','black',3,true)
        return Plaine4
    }
    Plaine5(){
        const Plaine5= new Plaine(800 ,0,700,70,'green','black',3,true)
        return Plaine5
    }
    Plaine6(){
        const Plaine6= new Plaine(1200 ,0,700,90,'green','black',3,true)
        return Plaine6
    }





  /** 
   * Dessin de la forme de l'objet
   */
  static buildForms() {
    const bld = new Plaine()
    let forms = []
    forms.push(
        bld.Plaine1(),
        bld.Plaine2(),
        bld.Plaine3(),
        bld.Plaine4(),
        bld.Plaine5(),
        bld.Plaine6()


        )

    const builds = forms
    return builds

  }
  
}
export {Plaine}
