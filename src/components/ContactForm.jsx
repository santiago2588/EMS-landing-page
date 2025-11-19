import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, MessageSquare, Building2, User } from 'lucide-react';

const ContactForm = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast({
            title: "Mensaje enviado",
            description: "Nos pondremos en contacto contigo pronto.",
        });

        setFormData({
            name: '',
            email: '',
            company: '',
            message: ''
        });
        setIsSubmitting(false);
    };

    return (
        <section id="contacto" className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Hablemos de tu <span className="gradient-text">Eficiencia Energética</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            ¿Tienes preguntas sobre nuestros planes o necesitas una solución personalizada?
                            Completa el formulario y nuestro equipo de expertos te contactará a la brevedad.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                                    <Mail className="text-brand-g7 h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Correo Electrónico</h3>
                                    <p className="text-gray-600 dark:text-gray-400">contacto@energypro.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                                    <MessageSquare className="text-brand-g7 h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Soporte</h3>
                                    <p className="text-gray-600 dark:text-gray-400">soporte@energypro.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Tu nombre"
                                            className="pl-10"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Empresa</Label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input
                                            id="company"
                                            name="company"
                                            placeholder="Nombre de tu empresa"
                                            className="pl-10"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Corporativo</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="tu@empresa.com"
                                        className="pl-10"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Mensaje</Label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                    placeholder="¿En qué podemos ayudarte?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    "Enviando..."
                                ) : (
                                    <>
                                        Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
