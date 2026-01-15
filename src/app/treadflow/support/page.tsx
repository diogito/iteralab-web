import type { Metadata } from 'next';
import Link from 'next/link';
import { LifeBuoy, UserX, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Soporte | TreadFlow',
    description: 'Centro de soporte de TreadFlow. Obtén ayuda técnica, reporta problemas o gestiona tu cuenta.',
};

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-24">
            {/* Encabezado */}
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4">
                    ¿Necesitas Ayuda?
                </h1>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                    El equipo de ingeniería de TreadFlow está listo para resolver tus dudas técnicas.
                </p>
            </div>

            {/* Grid de Acciones */}
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mt-16 w-full">
                {/* Tarjeta 1: Soporte Técnico */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-[#39FF14] transition-colors group">
                    <div className="w-14 h-14 rounded-xl bg-[#39FF14]/10 flex items-center justify-center mb-6">
                        <LifeBuoy className="w-7 h-7 text-[#39FF14]" />
                    </div>
                    <h2 className="text-white font-bold text-xl mb-2">
                        Soporte Vía Email
                    </h2>
                    <p className="text-zinc-400 mb-6">
                        Para reportar bugs o problemas de acceso.
                    </p>
                    <a
                        href="mailto:soporte@iteralab.cl"
                        className="text-[#39FF14] font-bold hover:underline inline-flex items-center gap-2"
                    >
                        soporte@iteralab.cl
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                {/* Tarjeta 2: Gestión de Cuenta */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-red-500 transition-colors group">
                    <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-red-500/10 transition-colors">
                        <UserX className="w-7 h-7 text-zinc-500 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h2 className="text-white font-bold text-xl mb-2">
                        Eliminar mi Cuenta
                    </h2>
                    <p className="text-zinc-400 mb-6">
                        Solicita el borrado permanente de tus datos.
                    </p>
                    <a
                        href="mailto:soporte@iteralab.cl?subject=Solicitud de Borrado de Cuenta TreadFlow"
                        className="text-zinc-400 group-hover:text-red-500 font-medium hover:underline inline-flex items-center gap-2 transition-colors"
                    >
                        Solicitar eliminación
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>

            {/* Sección WhatsApp */}
            <div className="mt-16 text-center">
                <p className="text-zinc-500 mb-4">
                    ¿Prefieres hablar con un humano?
                </p>
                <a
                    href="https://wa.me/56912345678?text=Hola%20Soporte%20TreadFlow,%20necesito%20ayuda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-black font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 hover:bg-[#128C7E] transition-colors"
                >
                    <MessageCircle className="w-5 h-5" />
                    Chat de Soporte WhatsApp
                </a>
            </div>

            {/* Link de regreso */}
            <Link
                href="/treadflow"
                className="text-sm text-zinc-600 hover:text-[#39FF14] mt-20 transition-colors"
            >
                ← Volver a TreadFlow
            </Link>
        </div>
    );
}
