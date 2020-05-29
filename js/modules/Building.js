import {AbstractForm} from './AbstractForm.js';

class Building extends AbstractForm {
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
 * Dessine la forme du building
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
   * premier building
   */

    building1(){
        const building1 = new Building(10,0,150,50,'green','black',3,true)
        return building1
    }
    building2(){
        const building2= new Building(100,0,180,100,'green','black',3,true)
        return building2
    }
    building3(){
        const building3= new Building(250,0,180,80,'green','black',3,true)
        return building3
  }
  building3(){
    const building3= new Building(400,0,180,80,'green','black',3,true)
    return building3
  }



  /** 
   * Dessin de la forme de l'objet
   */
  static buildForms() {
    const bld = new Building()
    let forms = []
    forms.push(
        bld.building1(),
        bld.building2(),
        bld.building3(),
        )

    const builds = forms
    return builds

  }
  
}
export {Building}
