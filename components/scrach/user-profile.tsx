"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  CreditCard,
  CheckCircle,
} from "lucide-react";

export function UserProfile() {
  // Sample user data with French/African naming conventions
  const userData = {
    nom: "Kabanda",
    postnom: "Kabanda",
    prenom: "Flovis",
    matricule: "CD-2024-001234",
    fonction: "Directeur Technique",
    etatCivil: "Marié",
    email: "amadou.mbeki@company.cd",
    telephone: "+243 81 234 5678",
    adresse: "15 Avenue Lumumba, Kinshasa, RDC",
    validiteCarte: "2027-12-31",
    statusCarte: "Actif",
    photoUrl: "/professional-african-man-smiling.png",
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "actif":
        return "bg-green-100 text-green-800 border-green-200";
      case "expiré":
        return "bg-red-100 text-red-800 border-red-200";
      case "suspendu":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getValidityProgress = () => {
    const today = new Date();
    const validityDate = new Date(userData.validiteCarte);
    const issueDate = new Date("2024-01-01"); // Assuming card was issued at start of year

    const totalDays = validityDate.getTime() - issueDate.getTime();
    const remainingDays = validityDate.getTime() - today.getTime();

    return Math.max(0, Math.min(100, (remainingDays / totalDays) * 100));
  };



  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-xl font-semibold text-foreground">
          Profil de l'agent
        </h1>
      </div>

      {/* Profile Photo Section */}
      <Card className="border-border shadow-sm">
        <CardContent className="pt-6 pb-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-24 w-24 border-2 border-border">
                <AvatarImage
                  src={userData.photoUrl || "/placeholder.svg"}
                  alt="Photo de profil"
                />
                <AvatarFallback className="text-lg font-medium bg-muted">
                  {userData.prenom[0]}
                  {userData.nom[0]}
                </AvatarFallback>
              </Avatar>
              {/* <Button size="sm" variant="secondary" className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full p-0">
                <Edit className="h-4 w-4" />
              </Button> */}
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-foreground">
                {userData.prenom} {userData.postnom} {userData.nom}
              </h2>
              <p className="text-sm text-muted-foreground">
                {userData.fonction}
              </p>
              <div className="flex items-center text-center justify-center">
                <Badge className={getStatusColor(userData.statusCarte)}>
                  {userData.statusCarte}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="border-border shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold">
              Informations personnelles
            </CardTitle>
            {/* <Button variant="ghost" size="sm" className="text-muted-foreground">
              Modifier
            </Button> */}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Nom complet</p>
              <p className="text-sm font-medium">
                {userData.nom} {userData.postnom} {userData.prenom}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Matricule</p>
              <p className="text-sm font-medium font-mono">
                {userData.matricule}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">E-mail</p>
              <p className="text-sm font-medium">{userData.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Téléphone</p>
              <p className="text-sm font-medium">{userData.telephone}</p>
            </div>  
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Adresse</p>
              <p className="text-sm font-medium text-balance">
                {userData.adresse}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Information */}
      <Card className="border-border shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">
            Informations professionnelles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Fonction</p>
              <p className="text-sm font-medium">{userData.fonction}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">État civil</p>
              <p className="text-sm font-medium">{userData.etatCivil}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card Status */}
      <Card className="border-border shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">
            Statut de la carte
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge className={getStatusColor(userData.statusCarte)}>
                  {userData.statusCarte}
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Validité</p>
              <p className="text-sm font-medium">
                {new Date(userData.validiteCarte).toLocaleDateString("fr-FR")}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Validité restante</span>
              <span className="font-medium">
                {Math.round(getValidityProgress())}%
              </span>
            </div>
            <Progress value={getValidityProgress()} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Bottom Navigation Placeholder */}
      {/* <div className="flex justify-center items-center space-x-8 py-4 border-t border-border bg-card">
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center space-y-1"
        >
          <MapPin className="h-5 w-5" />
          <span className="text-xs">Carte</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center space-y-1"
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Menu</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center space-y-1"
        >
          <Mail className="h-5 w-5" />
          <span className="text-xs">Partager</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center space-y-1"
        >
          <Clock className="h-5 w-5" />
          <span className="text-xs">Paramètres</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center space-y-1 text-accent"
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Profil</span>
        </Button>
      </div> */}
    </div>
  );
}
