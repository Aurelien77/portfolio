import React, { Component } from "react";

class Child24 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild24: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild24":
        this.setState({ shchild24: !this.state.shchild24 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild24 } = this.state;
    return (
      <div className="textcv4">  Technicien Informatique (9000 utilisateurs).
      service DPL PC / D2D (day to day)
      
      Dans Bureaux et salles de marchés : Résolution au jour le jour des demandes client concernant l'installation et le remplacements de postes informatiques. Prise de contact avec les utilisateurs pour transfert de leur configuration informatique, connexion a distance sur leur matériel.
      Récupération de la configuration logiciel, Installation de Windows xp bootable par PXE depuis un server de master, configuration de l’adresse du serveur DHCP sur nouveaux postes, configuration des imprimantes et du server de pools d'impressions, transferts de données des anciens postes aux nouveau, déploiement de l’ensemble des logiciels Société Générale. Déploiement des boîtiers « Strong Auth ».
      
      Environnement technique Windows XP pro sp3, Lotus notes, Office 2003, remote desktop connection, interface web de configuration du server, interface web pour la configuration du pool d'impression et de l'adresse du serveur DHCP, outil de call traking (itrack).
      
       Technicien support de vidéoconférences
      Service RCSG, sous-traitance pour IBM
      nombre d'intervenants = 5
      Gestionnaire de pont RMX et TMS + CMA. Poste dédié aux interventions pour le patronat SGCIB [Public VIP et VOP], comprenant une intervention rapide de moins de 5 minutes pour la salle du comité exécutif (Salle de la directrion).
      Support pour les système de visioconférence dans les salles de réunions, bureaux et salles de marchés
      systèmes de vidéoconférences Tandberg serie C et Polycom HDX.
      Prise en mains à distance du materiel et reglages de la bonne fonctionnalité des appels avec les techniciens des différents sites et pays.
      Intervention auprès de l’ensemble des entités de Société Générale. (Internationnalles)
      Suivi des demandes utilisateurs via un outil de Call Tracking IBM "SGD".
      Meetings multipoints et point à point. Création et mise à jour des fiches de la base de connaissance interne.
      Conseils aux utilisateurs et formation, création de fiches indicatives dans les salles pour les utilisateurs.
      Aide à la préparation organisationnelles des meetings auprès des secrétaires.
     Child 24
      

  
      {shchild24 && <Child24 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child24;