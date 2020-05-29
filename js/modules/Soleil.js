import {AbstractForm} from './AbstractForm.js';

class Soleil extends AbstractForm {
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
 * Dessine la forme du Soleil
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
   * premier Soleil
   */

    Soleil1(){
        const Soleil1 = new Soleil(100,75,50,0,'Yellow','Red',3,false)
        return Soleil1
    }


  /** 
   * Dessin de la forme de l'objet
   */
  static buildForms() {
    const bld = new Soleil()
    let forms = []
    forms.push(
        bld.Soleil1()
        )

    const builds = forms
    return builds

  }
  
}
export {Soleil}
