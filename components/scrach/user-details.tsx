import {
  ArrowLeft,
  User,
  Building2,
  Calendar,
  Shield,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function UserDetails() {
  const userProfile = {
    photo: null, // Set to null to demonstrate placeholder functionality
    nom: "Dupont",
    postnom: "Marie",
    prenom: "Jean",
    matricule: "EMP-2024-001",
    status: "Actif",
    fonction: "Directeur Technique",
    validite: "31/12/2025",
    entreprise: "TechCorp Solutions",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      {/* Header with back button */}
      <div className="flex items-center justify-between p-4 text-white">
        <button className="flex items-center gap-2 text-white/90 hover:text-white">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">Profil Entreprise</h1>
        <div className="w-6" /> {/* Spacer for centering */}
      </div>

      {/* Profile Card */}
      <div className="px-4 pb-8">
        <Card className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Profile Photo Section */}
          <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 px-6 pt-8 pb-16">
            <div className="flex justify-center">
              <div className="relative">
                {userProfile.photo ? (
                  <img
                    src={userProfile.photo || "/placeholder.svg"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center">
                    <User className="h-12 w-12 text-gray-400" />
                  </div>
                )}
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <CardContent className="px-6 py-6 -mt-8 relative z-10">
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block">
                    Nom
                  </label>
                  <div className="text-lg font-semibold text-gray-900">
                    {userProfile.nom}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block">
                    Postnom
                  </label>
                  <div className="text-lg font-semibold text-gray-900">
                    {userProfile.postnom}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block">
                    Prénom
                  </label>
                  <div className="text-lg font-semibold text-gray-900">
                    {userProfile.prenom}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Matricule
                  </label>
                  <div className="text-lg font-semibold text-gray-900">
                    {userProfile.matricule}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Status
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {userProfile.status}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Fonction
                  </label>
                  <div className="text-lg font-semibold text-gray-900">
                    {userProfile.fonction}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Validité
                  </label>
                  <div className="text-lg font-semibold text-gray-900">
                    {userProfile.validite}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Entreprise
                  </label>
                  <div className="text-lg font-semibold text-gray-900">
                    {userProfile.entreprise}
                  </div>
                </div>
              </div>
            </div>

        
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
