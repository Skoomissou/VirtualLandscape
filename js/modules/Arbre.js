import {AbstractForm} from './AbstractForm.js';

class Arbre extends AbstractForm {
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
 * Dessine la forme du Arbre
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
   * premier Arbre
   */

    Arbre1(){
        const Arbre1 = new Arbre(300,0,60,300,'Brown','black',3,true)
        return Arbre1
    }
    Arbre2(){
        const Arbre2 = new Arbre(200,400,250,300,'Green','black',3,false)
        return Arbre2
    }


  /** 
   * Dessin de la forme de l'objet
   */
  static buildForms() {
    const bld = new Arbre()
    let forms = []
    forms.push(
        bld.Arbre1(),
        bld.Arbre2()
        )

    const builds = forms
    return builds

  }
  
}
export {Arbre}
