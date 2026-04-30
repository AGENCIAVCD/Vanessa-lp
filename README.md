# Protocolo Reset Landing Page

## Instalação

```bash
npm install
```

## Execução local

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Onde trocar o link do WhatsApp

Edite `whatsappGroupUrl` em [config/site.ts](/Users/brunoravaglia/Desktop/Vanessa/config/site.ts).

Você também pode sobrescrever via variável de ambiente:

```bash
NEXT_PUBLIC_WHATSAPP_GROUP_URL="https://chat.whatsapp.com/seu-link"
```

## Outras variáveis fáceis de ajustar

- `availableSpots`
- `closingDate`
- `ctaPrimary`, `ctaSecondary`, `ctaFinal`
- `socialProof.testimonials`
- `socialProof.transformationCards`
