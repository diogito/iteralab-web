import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Política de Privacidad | TreadFlow',
    description: 'Política de privacidad de TreadFlow App. Conoce cómo recopilamos, usamos y protegemos tu información.',
};

export default function PrivacyPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            {/* Título */}
            <h1 className="text-4xl font-bold text-white mb-2">
                Política de Privacidad
            </h1>

            {/* Subtítulo */}
            <p className="text-[#39FF14] mb-12 uppercase tracking-wider text-sm font-semibold">
                TreadFlow App - Última actualización: Enero 2026
            </p>

            {/* Contenido */}
            <div className="text-zinc-300">
                {/* 1. Introducción */}
                <h2 className="text-white font-bold text-xl mt-10 mb-4">
                    1. Introducción
                </h2>
                <p className="mb-6">
                    TreadFlow (&quot;la Aplicación&quot;) es un servicio desarrollado por Iteralab.
                    Nos comprometemos a proteger su privacidad. Esta política explica cómo
                    recopilamos, usamos y protegemos su información al utilizar nuestra
                    aplicación de entrenamiento.
                </p>

                {/* 2. Información que Recopilamos */}
                <h2 className="text-white font-bold text-xl mt-10 mb-4">
                    2. Información que Recopilamos
                </h2>
                <p className="mb-6">
                    Para proporcionar las funcionalidades principales de la Aplicación,
                    recopilamos los siguientes tipos de datos:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                        <span className="text-[#39FF14] font-medium">Información de Cuenta:</span>{' '}
                        Nombre, correo electrónico y foto de perfil (a través de Google Sign-In).
                    </li>
                    <li>
                        <span className="text-[#39FF14] font-medium">Datos Fisiológicos:</span>{' '}
                        Peso, altura, género y edad. Estos datos son estrictamente necesarios
                        para el cálculo de calorías quemadas y métricas de rendimiento.
                    </li>
                    <li>
                        <span className="text-[#39FF14] font-medium">Datos de Actividad:</span>{' '}
                        Historial de entrenamientos, duración, velocidad, inclinación y
                        frecuencia cardíaca.
                    </li>
                </ul>

                {/* 3. Uso de la Información */}
                <h2 className="text-white font-bold text-xl mt-10 mb-4">
                    3. Uso de la Información
                </h2>
                <p className="mb-6">
                    Utilizamos sus datos exclusivamente para:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Crear y gestionar su cuenta de usuario.</li>
                    <li>Calcular métricas de salud personalizadas (calorías, distancia).</li>
                    <li>Mantener un historial de su progreso.</li>
                    <li>
                        <span className="text-white font-medium">
                            No vendemos ni compartimos sus datos personales con terceros para
                            fines publicitarios.
                        </span>
                    </li>
                </ul>

                {/* 4. Almacenamiento y Seguridad */}
                <h2 className="text-white font-bold text-xl mt-10 mb-4">
                    4. Almacenamiento y Seguridad
                </h2>
                <p className="mb-6">
                    Sus datos se almacenan de forma segura en servidores proporcionados por
                    Supabase Inc. Implementamos medidas de seguridad estándar de la industria
                    para proteger su información contra accesos no autorizados.
                </p>

                {/* 5. Eliminación de Datos */}
                <h2 className="text-white font-bold text-xl mt-10 mb-4">
                    5. Eliminación de Datos
                </h2>
                <p className="mb-6">
                    Usted tiene el control total sobre sus datos. Si desea eliminar su cuenta
                    y todos los datos asociados, puede hacerlo de dos formas:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                        <span className="text-[#39FF14] font-medium">Desde la Aplicación:</span>{' '}
                        Vaya a Perfil → Configuración → Eliminar Cuenta.
                    </li>
                    <li>
                        <span className="text-[#39FF14] font-medium">Solicitud Manual:</span>{' '}
                        Envíe un correo a{' '}
                        <a
                            href="mailto:soporte@iteralab.cl"
                            className="text-[#39FF14] hover:underline"
                        >
                            soporte@iteralab.cl
                        </a>{' '}
                        con el asunto &quot;Solicitud de Borrado de Datos&quot;.
                    </li>
                </ul>

                {/* 6. Contacto */}
                <h2 className="text-white font-bold text-xl mt-10 mb-4">
                    6. Contacto
                </h2>
                <p className="mb-6">
                    Si tiene preguntas sobre esta política, contáctenos en{' '}
                    <a
                        href="mailto:soporte@iteralab.cl"
                        className="text-[#39FF14] hover:underline"
                    >
                        soporte@iteralab.cl
                    </a>
                    .
                </p>
            </div>

            {/* Footer del documento */}
            <Link
                href="/"
                className="inline-block text-sm text-zinc-500 hover:text-[#39FF14] mt-20 transition-colors"
            >
                ← Volver a Iteralab
            </Link>
        </div>
    );
}
