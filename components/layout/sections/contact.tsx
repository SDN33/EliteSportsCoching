"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  profile: z.string().min(2).max(100),
  goal: z.string().min(6).max(220),
  message: z.string().min(10).max(1000),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      profile: "Athlète individuel",
      goal: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const body = [
      `Nom: ${values.fullName}`,
      `Email: ${values.email}`,
      `Profil: ${values.profile}`,
      `Objectif principal: ${values.goal}`,
      "",
      values.message,
    ].join("%0D%0A");

    window.location.href = `mailto:contact@elitesportscoching.com?subject=Demande%20d'accompagnement%20Sport%20Synergie%20Consulting&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-amber-500/15 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.2fr] lg:gap-16">
          {/* Left Section - Info */}
          <div data-reveal="left" className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest font-bold text-blue-400">
                  🚀 Démarrer Votre Accompagnement
                </p>
                <h2 className="font-title text-4xl md:text-5xl font-bold leading-tight text-foreground">
                  Construisons Votre Trajectoire
                  <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                    De Carrière Premium
                  </span>
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
                Analysons votre situation, vos objectifs et vos besoins: conseil sportif, gestion de carrière, logement, investissement. Définissons ensemble un plan d'action concret.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <article data-reveal data-reveal-delay="1" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-300 -z-10" />
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
                    <Mail className="size-5" />
                  </div>
                  <span className="font-bold text-white">E-mail Direct</span>
                </div>
                <p className="text-sm text-white/70 font-medium">contact@elitesportscoching.com</p>
              </article>

              <article data-reveal data-reveal-delay="2" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-300 -z-10" />
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
                    <Phone className="size-5" />
                  </div>
                  <span className="font-bold text-white">Appel Stratégique</span>
                </div>
                <p className="text-sm text-white/70 font-medium">+33 6 00 00 00 00</p>
              </article>

              <article data-reveal data-reveal-delay="3" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-300 -z-10" />
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
                    <Building2 className="size-5" />
                  </div>
                  <span className="font-bold text-white">Profils</span>
                </div>
                <p className="text-sm text-white/70 font-medium">Athlètes, joueurs, sportifs de haut niveau</p>
              </article>

              <article data-reveal data-reveal-delay="4" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-300 -z-10" />
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/20 p-2 text-blue-400">
                    <MapPin className="size-5" />
                  </div>
                  <span className="font-bold text-white">Couverture</span>
                </div>
                <p className="text-sm text-white/70 font-medium">France & international, présentiel/distanciel</p>
              </article>
            </div>
          </div>

          {/* Right Section - Form */}
          <Card
            data-reveal="right"
            data-reveal-delay="1"
            className="rounded-3xl border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <CardContent className="p-8 md:p-10">
              <div className="mb-8">
                <h3 className="font-title text-2xl font-bold text-white mb-2">Formulaire d&apos;Accompagnement</h3>
                <p className="text-sm text-white/60">Remplissez ce formulaire pour commencer votre parcours</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 font-semibold">Nom complet</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Votre nom"
                            className="h-12 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500/50 focus:bg-white/15"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="vous@exemple.com"
                            className="h-12 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500/50 focus:bg-white/15"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="profile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 font-semibold">Profil</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-lg bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Sélectionnez votre profil" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-900 border-white/20">
                            <SelectItem value="Athlète individuel">Athlète individuel</SelectItem>
                            <SelectItem value="Joueur professionnel">Joueur professionnel</SelectItem>
                            <SelectItem value="Jeune talent">Jeune talent</SelectItem>
                            <SelectItem value="Sportif en reconversion">Sportif en reconversion</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 font-semibold">Objectif prioritaire</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: gérer ma carrière et trouver un logement"
                            className="h-12 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500/50 focus:bg-white/15"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 font-semibold">Votre contexte</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Parlez de vos enjeux, contraintes, ambitions et échéances."
                            className="resize-none rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500/50 focus:bg-white/15"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="rounded-lg h-12 mt-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Démarrer mon accompagnement
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
