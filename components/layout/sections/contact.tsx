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
      profile: "Athlete individuel",
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

    window.location.href = `mailto:contact@elitesportscoching.com?subject=Demande%20d'accompagnement%20Elite%20Sports%20Coaching%20%26%20Conseils%20Premium&body=${body}`;
  };

  return (
    <section id="contact" className="container pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.12fr] lg:gap-8">
        <div data-reveal="left" className="section-shell flex flex-col gap-6">
          <div>
            <p className="section-kicker">Demande d&apos;accompagnement</p>
            <h2 className="mt-2 font-title text-balance-pretty text-3xl font-semibold md:text-5xl">
              Construisons votre trajectoire sportive.
              <br className="hidden md:block" />
              Structurons votre performance durable.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Premier echange strategique pour analyser vos objectifs, vos
              contraintes et votre contexte de competition, puis definir une
              feuille de route performante et realiste.
            </p>
          </div>

          <div className="grid gap-3">
            <article data-reveal data-reveal-delay="1" className="surface-soft p-4">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
                <Mail className="size-4 text-primary" />
                E-mail direct
              </div>
              <p className="text-sm text-muted-foreground">
                contact@elitesportscoching.com
              </p>
            </article>
            <article data-reveal data-reveal-delay="2" className="surface-soft p-4">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
                <Phone className="size-4 text-primary" />
                Appel strategique
              </div>
              <p className="text-sm text-muted-foreground">+33 6 00 00 00 00</p>
            </article>
            <article data-reveal data-reveal-delay="3" className="surface-soft p-4">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
                <Building2 className="size-4 text-primary" />
                Format d&apos;accompagnement
              </div>
              <p className="text-sm text-muted-foreground">
                Athletes, clubs, staffs, centres de formation
              </p>
            </article>
            <article data-reveal data-reveal-delay="4" className="surface-soft p-4">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
                <MapPin className="size-4 text-primary" />
                Intervention
              </div>
              <p className="text-sm text-muted-foreground">
                France et international, en presentiel ou distanciel
              </p>
            </article>
          </div>
        </div>

        <Card
          data-reveal="right"
          data-reveal-delay="1"
          className="rounded-[1.7rem] border-border/70 bg-card/82 shadow-[0_25px_60px_-40px_rgba(15,96,148,0.75)]"
        >
          <CardContent className="p-5 pt-6 md:p-7">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Votre nom"
                          className="h-11 rounded-xl bg-background/75"
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="vous@exemple.com"
                          className="h-11 rounded-xl bg-background/75"
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
                      <FormLabel>Profil</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-11 rounded-xl bg-background/75">
                            <SelectValue placeholder="Selectionnez votre profil" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Athlete individuel">Athlete individuel</SelectItem>
                          <SelectItem value="Club ou staff">Club ou staff</SelectItem>
                          <SelectItem value="Jeune talent">Jeune talent</SelectItem>
                          <SelectItem value="Structure sportive">Structure sportive</SelectItem>
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
                      <FormLabel>Objectif prioritaire</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: structurer une progression sur 6 mois"
                          className="h-11 rounded-xl bg-background/75"
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
                      <FormLabel>Votre contexte</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Parlez de vos enjeux, contraintes, ambitions et echeances."
                          className="resize-none rounded-xl bg-background/75"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="rounded-full py-6 text-sm font-semibold">
                  Revelons votre potentiel
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
