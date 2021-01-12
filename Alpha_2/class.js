class Joueur {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.taille = tailleCarre;
        this.vie = 3;
        this.attaque = 0;
        this.vitesse = 2;
        this.score = 0;
        this.fin = false;
        this.dead = false;
        this.pnjtuto =0;
        this.matrix = [
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffa200", "#ffffff", "#ffffff", "#ffa200", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#000000", "#000000", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#000000", "#000000", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffa200", "#ffffff", "#ffffff", "#ffa200", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#ffffff"],
            ["#000000", "#ffffff", "#ffffff", "#000000", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#000000", "#ffffff", "#ffffff", "#000000"],
            ["#000000", "#ffffff", "#ffffff", "#000000", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#ffa200", "#ffa200", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#000000", "#ffffff", "#ffffff", "#000000"],
            ["#000000", "#ffffff", "#ffffff", "#000000", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#ffa200", "#ffa200", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#000000", "#ffffff", "#ffffff", "#000000"],
            ["#ffffff", "#ffffff", "#ffffff", "#000000", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#000000", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#99A3A4", "#99A3A4", "#99A3A4", "#99A3A4", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]
        ]
        this.img = initSprite(this.matrix);
    }

    bouger() {
        if (keyIsDown(RIGHT_ARROW) && !this.collision(this.x + 1, this.y)) this.x += this.vitesse;
        if (keyIsDown(LEFT_ARROW) && !this.collision(this.x - 1, this.y)) this.x -= this.vitesse;
        if (keyIsDown(UP_ARROW) && !this.collision(this.x, this.y - 1)) this.y -= this.vitesse;
        if (keyIsDown(DOWN_ARROW) && !this.collision(this.x, this.y + 1)) this.y += this.vitesse;
        this.afficher();
        this.bords();
        this.mort();
        this.testEnnemis(this.x, this.y);
        this.testPNJ(this.x, this.y);
        if (this.fin==true){
            this.end();
        }
    }

    afficher() {
        //fill("#00d5ff");
        //rect(this.x, this.y, tailleCarre, tailleCarre);
        image(this.img, this.x, this.y)

    }
    bords() {
        var changementsDeNiv = false;
        if (this.x > tailleCanvas - tailleCarre) {
            this.x = 0;
            changementsDeNiv = true;
            /*console.log("wut")
            console.log(niveauActu);
            console.log(niveau[0])*/
            if (niveauActu == niveau[0]) {
                niveauActu = niveau[1];
                //console.log("hey")
                Level = 2;
            }
            else if (niveauActu == niveau[1]) {
                niveauActu = niveau[2];
                Level = 3;
            }
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = tailleCanvas - tailleCarre;
            changementsDeNiv = true;
            if (niveauActu == niveau[1]) {
                niveauActu = niveau[0];
                Level = 1;
            }
            else if (niveauActu == niveau[2]) {
                niveauActu = niveau[1];
                Level = 2
            }
        }
        if (this.y + tailleCarre > tailleCanvas) {
            this.y = tailleCanvas - tailleCarre;
        }
        if (changementsDeNiv == true) {
            //console.log(niveauActu)
            initLev();
            
            //console.log(murTab);
        }
    }
    testEnnemis(x1, y1) {

        for (var i = 0; i < ennemiTab.length; i++) {
            var x2 = x1 + this.taille;
            var y2 = y1 + this.taille;
            var ex2 = ennemiTab[i].x + tailleCarre;
            var ey2 = ennemiTab[i].y + tailleCarre;
            if (x2 > ennemiTab[i].x && y2 > ennemiTab[i].y && x1 < ex2 && y1 < ey2) {
                if (this.attaque == 0) {
                    this.vie -= 1;
                    this.x = coodx;
                    this.y = coody;
                    
                    this.score-=1;
                     
                }
                else {
                    ennemiTab.splice(i, 1);
                    this.attaque -= 1;
                    this.score += 10;
                     
                }
            }
        }

    }
    testPNJ(x1, y1) {
        for (var i = 0; i < pnjTab.length; i++) {
            var x2 = x1 + this.taille;
            var y2 = y1 + this.taille;
            var ex2 = pnjTab[i].x + tailleCarre;
            var ey2 = pnjTab[i].y + tailleCarre;
            var ey1 = pnjTab[i].y;
            if (x2 > pnjTab[i].x && y2 > pnjTab[i].y && x1 < ex2 && y1 < ey2) {
                if(pnjTab[i].type== "Arme"){     
                    
                    if (pnjTab[i].arme == true && stockArme > 0 ) {
                    
                        this.attaque += 1
                        stockArme --;
                        console.log(this.attaque);
                        pnjTab[i].arme = false;
                        this.score += 1;
                        fill(255, 255, 255);
                        text(pnjTab[i].direArme, ex2, ey1-35, tailleCarre * 4, tailleCarre * 4)
                         
                    }
                }
                else if(pnjTab[i].type == "Tuto" ){
                    setTimeout(function(){ this.pnjtuto = 1; }, 4000);
                    fill(255,255,255);
                    text(pnjTab[i].direTuto, ex2, ey1-20, tailleCarre*6, tailleCarre*6);
                }
                
                else if(pnjTab[i].type == "TP"){
                    niveauActu=niveau[3];
                    this.x= 200-tailleCarre/20;
                    this.y=tailleCanvas-tailleCarre;
                    initLev();
                }
                else if(pnjTab[i].type == "Fin"){
                    pnjTab.splice(i,1);
                    this.fin= true;
                    
                }

            }
            
        }
    }
    end(){
        this.x= 1000;
        this.y= 1000;
        fill("#0f1054")
        rect(0,0,tailleCanvas,tailleCanvas);
        fill(255,255,255)

        var joueurActu = prompt("Quel est votre pseudo?")
        pseudo.push(joueurActu);
        console.log(pseudo)
        text("Bravo "+joueurActu+", vous avez fini le jeu. Score : " +this.score, tailleCarre*3, tailleCanvas/2)
        updateScoreBoard();
        
        menu = true
    }
    mort() {
        if (this.vie < 1) {
            
            this.vie = 3;
            niveauActu = niveau[0];
            this.arme = 0;
            this.score = 0;
            this.x = coodx;
            this.y = coody;
            Level = 1;
            this.dead = true;
            stockArme = 3;
            
            initLev();
            
            menu = true;
        }
    }
    collision(x1, y1) {
        for (var i = 0; i < murTab.length; i++) {
            var x2 = x1 + this.taille;
            var y2 = y1 + this.taille;
            var murx2 = murTab[i].x + tailleCarre;
            var mury2 = murTab[i].y + tailleCarre;
            if (x2 > murTab[i].x && y2 > murTab[i].y && x1 < murx2 && y1 < mury2) {
                return true;
            }
        }
        return false;

    }
}

class Ennemi {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.matrix = [
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#C0392B", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#C0392B", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#C0392B", "#C0392B", "#000000", "#ffffff", "#C0392B", "#C0392B", "#000000", "#000000", "#C0392B", "#C0392B", "#ffffff", "#000000", "#C0392B", "#C0392B", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#000000", "#ffffff", "#C0392B", "#000000", "#ffffff", "#ffffff", "#000000", "#C0392B", "#ffffff", "#000000", "#C0392B", "#C0392B", "#C0392B", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#ffffff"],
            ["#ffffff", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B"],
            ["#C0392B", "#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B"],
            ["#C0392B", "#A04000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#000000", "#C0392B", "#C0392B", "#000000", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B", "#A04000", "#C0392B"],
            ["#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B"],
            ["#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B"],
            ["#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#A04000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B"],
            ["#ffffff", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B"],
            ["#ffffff", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#000000", "#000000", "#000000", "#000000", "#000000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B"],
            ["#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#A04000", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
            ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#C0392B", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]
        ]
        this.img = initSprite(this.matrix);
    }

    afficher() {
        /*fill("#ff0000");
        rect(this.x, this.y, tailleCarre, tailleCarre, 30);*/
        image(this.img, this.x, this.y)
    }

    bouger() {
        var tabDir = ["haut", "bas", "gauche", "droite"];
        var direction = random(tabDir);
        var xj = joueur.x;
        var yj = joueur.y;
        if (int(dist(xj, yj, this.x, this.y)) > 90) {
            if (direction == "haut" && !this.collision(this.x, this.y + 1)) {
                this.y += 1
            }
            if (direction == "bas" && !this.collision(this.x, this.y - 1)) {
                this.y -= 1
            }
            if (direction == "droite" && !this.collision(this.x + 1, this.y)) {
                this.x += 1
            }
            if (direction == "gauche" && !this.collision(this.x - 1, this.y)) {
                this.x -= 1
            }
        }
        else {
            this.versleJoueur(this.x, this.y);
        }
        this.afficher();
        this.bords();



    }
    versleJoueur(x1, y1) {

        if (x1 < joueur.x && !this.collision(this.x + 1, this.y)) {
            this.x++
        }
        if (x1 > joueur.x && !this.collision(this.x - 1, this.y)) {
            this.x--
        }
        if (y1 < joueur.y && !this.collision(this.x, this.y + 1)) {
            this.y++
        }
        if (y1 > joueur.y && !this.collision(this.x, this.y - 1)) {
            this.y--
        }
    }
    bords() {
        if (this.x < 0) this.x = tailleCanvas - tailleCarre;
        if (this.y < 0) this.y = tailleCanvas - tailleCarre;
        if (this.x + tailleCarre > tailleCanvas) this.x = 0;
        if (this.y + tailleCarre > tailleCanvas) this.y = 0;
    }
    collision(x1, y1) {
        for (var i = 0; i < murTab.length; i++) {
            var x2 = x1 + tailleCarre;
            var y2 = y1 + tailleCarre;
            var murx2 = murTab[i].x + tailleCarre;
            var mury2 = murTab[i].y + tailleCarre;
            if (x2 > murTab[i].x && y2 > murTab[i].y && x1 < murx2 && y1 < mury2) {
                return true;
            }
        }
        return false;

    }

}


class Mur {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.matrix13 = [
            ["#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB"],
            ["#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6"],
            ["#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4"],
            ["#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4"],
            ["#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4"],
            ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
            ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#2874A6","#3498DB","#3498DB","#2874A6","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
            ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#3498DB","#3498DB","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
            ["#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#3498DB","#3498DB","#3498DB","#3498DB","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6"],
            ["#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB"],
            ["#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB"],
            ["#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#3498DB","#3498DB","#3498DB","#3498DB","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6"],
            ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#3498DB","#3498DB","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
            ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#2874A6","#3498DB","#3498DB","#2874A6","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
            ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
            ["#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4"],
            ["#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4"],
            ["#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6","#99A3A4"],
            ["#2874A6","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#2874A6"],
            ["#3498DB","#2874A6","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB","#3498DB","#2874A6","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#2874A6","#3498DB"]
       ];
        this.matrix2 = [
            ["#ffffff","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000","#000000","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000","#ffffff"],
            ["#ffffff","#ffffff","#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#454545","#454545","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000"],
            ["#ffffff","#ffffff","#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#454545","#000000","#454545","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000"],
            ["#ffffff","#ffffff","#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#454545","#454545","#454545","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000"],
            ["#ffffff","#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#757575","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000"],
            ["#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000"],
            ["#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#757575","#757575","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#757575","#99A3A4","#99A3A4","#000000"],
            ["#000000","#99A3A4","#99A3A4","#99A3A4","#757575","#757575","#454545","#454545","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#454545","#757575","#99A3A4","#99A3A4","#000000"],
            ["#000000","#99A3A4","#757575","#757575","#454545","#454545","#000000","#454545","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#000000","#757575","#99A3A4","#99A3A4","#99A3A4","#000000"],
            ["#000000","#99A3A4","#757575","#454545","#454545","#000000","#000000","#454545","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#454545","#757575","#99A3A4","#99A3A4","#99A3A4","#000000"],
            ["#000000","#99A3A4","#757575","#454545","#454545","#454545","#454545","#454545","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#757575","#757575","#99A3A4","#99A3A4","#000000","#ffffff"],
            ["#ffffff","#000000","#99A3A4","#757575","#757575","#757575","#757575","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#757575","#99A3A4","#99A3A4","#99A3A4","#000000","#ffffff"],
            ["#ffffff","#000000","#99A3A4","#99A3A4","#757575","#757575","#757575","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000","#000000","#ffffff"],
            ["#ffffff","#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#000000","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#000000","#000000","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#99A3A4","#99A3A4","#99A3A4","#000000","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff"]
       ];
       this.img2 = initSprite(this.matrix2);
       this.img13 = initSprite(this.matrix13);

    }

    afficher() {
        
        if(Level == 2){
            
            image(this.img2, this.x, this.y)
        }
        else{
            
            image(this.img13, this.x, this.y)
        }
        
    }

}

class PNJ {
    constructor(x, y, typePNJ) {
        this.x = x;
        this.y = y;
        this.arme = true;
        this.type = typePNJ; /*type possible: Arme; Fin; tuto; TP*/
        this.phraseTuto= ["Bienvenue Voyageur Galactique. Faites attention aux martiens. Allez voir mon equipage si vous avez besoin d'aide.","Allez chercher le guide du voyageur galactique dans la dernière salle du vaisseau."]
        this.phraseArme = ["Vous devriez éliminez les martiens avec ça.","Bonjour Voyageur! Prenez ce bouclier désintégrateur.","Cette technologie est très avancé.","Le capitaine a fait la seconde guerre neptunienne.","Avant j’étais un astrostoppeur.","Ce vaisseau est un Blanks-i>0."];
        this.direArme= random(this.phraseArme);
        this.direTuto= random(this.phraseTuto);
        this.matrixArme =[
            ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#000000","#2874A6","#2874A6","#2874A6","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#000000","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#000000","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#000000","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#F1948A","#000000","#000000","#E59866","#E59866","#E59866","#000000","#000000","#F1948A","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#000000","#ffffff","#ffa200","#000000","#E59866","#000000","#ffa200","#ffffff","#000000","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#E59866","#000000","#000000","#E59866","#E59866","#E59866","#000000","#000000","#F1948A","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#E59866","#E59866","#E59866","#E59866","#E59866","#E59866","#F1948A","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#000000","#000000","#000000","#000000","#000000","#000000","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff"],
            ["#000000","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#000000","#ffffff","#ffffff"],
            ["#000000","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#000000","#ffffff","#ffffff"],
            ["#000000","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#000000","#ffffff","#ffffff"],
            ["#000000","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#000000","#ffffff","#ffffff"],
            ["#000000","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#000000","#ffffff","#ffffff"],
            ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
            ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]
       ];
       this.matrixTuto = [
        ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#000000","#2874A6","#ffdd00","#2874A6","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#000000","#ffdd00","#2874A6","#ffdd00","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#000000","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#000000","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#F1948A","#000000","#000000","#E59866","#E59866","#E59866","#000000","#000000","#F1948A","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#000000","#ffffff","#ffa200","#000000","#E59866","#000000","#ffa200","#ffffff","#000000","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#E59866","#000000","#000000","#E59866","#E59866","#E59866","#000000","#000000","#F1948A","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#F1948A","#E59866","#E59866","#E59866","#E59866","#E59866","#E59866","#F1948A","#F1948A","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        ["#000000","#000000","#000000","#000000","#000000","#000000","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#F1948A","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff"],
        ["#000000","#ffa200","#ffdd00","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffdd00","#ffa200","#000000","#ffffff","#ffffff"],
        ["#000000","#ffdd00","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffdd00","#ffdd00","#ffdd00","#ffa200","#ffa200","#ffa200","#ffdd00","#000000","#ffffff","#ffffff"],
        ["#000000","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#000000","#ffffff","#ffffff"],
        ["#000000","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffdd00","#ffdd00","#ffdd00","#000000","#000000","#ffa200","#ffa200","#000000","#ffffff","#ffffff"],
        ["#000000","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#000000","#ffffff","#ffffff"],
        ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
        ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffa200","#ffa200","#ffa200","#000000","#000000","#ffa200","#ffa200","#ffa200","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]
   ];
   this.matrixTP = [
    ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
    ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
    ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
    ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
    ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
    ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
    ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
    ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
    ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
    ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
    ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
    ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
    ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
    ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
    ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
    ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
    ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"],
    ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
    ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
    ["#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4","#99A3A4"]
    ];
       
    }

    afficher() {
        if(this.type=="Arme"){
            this.img = initSprite(this.matrixArme);
            image(this.img, this.x, this.y)
        }
        else if(this.type=="Tuto"){
            this.img = initSprite(this.matrixTuto);
            image(this.img, this.x, this.y)
        }
        else if(this.type=="TP"){
            this.img = initSprite(this.matrixTP);
            image(this.img, this.x, this.y)
        }
        else{
            fill("#000000")
            text("42",this.x,this.y+15)
            
        }
        if (this.type=="Fin"){
            var ex2 = this.x + tailleCarre;
            var ey1 = this.y;
            fill(0,0,0);
            text("Le Guide du Voyageur Galactique", ex2, ey1-20, tailleCarre*6, tailleCarre*6);
        }
        
        
        

    }

}

class EnnemiKiller{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    spawnProof(){
        var x1 = this.x;
        var y1 = this.y;
        for (var i = 0; i < ennemiTab.length; i++) {
            var x2 = x1 + tailleCarre;
            var y2 = y1 + tailleCarre;
            var ex2 = ennemiTab[i].x + tailleCarre;
            var ey2 = ennemiTab[i].y + tailleCarre;
            if (x2 > ennemiTab[i].x && y2 > ennemiTab[i].y && x1 < ex2 && y1 < ey2) {
                
                ennemiTab.splice(i, 1);
                this.attaque -= 1;
                this.score += 10;
                
                
            }
        }
    }
}