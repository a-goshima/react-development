# React Frontend (Devcontainer + EC2)

このリポジトリは、EC2 上で Devcontainer + Docker を用いて構築された React フロントエンド環境です。  
Vite + TypeScript + Tailwind CSS + ShadCN UI によって、モダンで高速なフロントエンド開発が可能です。

---

## 技術スタック

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [React Router](https://reactrouter.com/)
- Dev Container + Docker 開発環境

---

### 特徴

- `Vite` サーバーが `0.0.0.0:3000` にバインドされており、外部（ローカルブラウザ）からアクセス可能
- `docker-compose` によりポート 3000 がホスト（EC2）とフォワード済み
- `devcontainer.json` にて `"forwardPorts": [3000]` 設定済み
- EC2 セキュリティグループにて 3000 番ポート開放済み（開発用途）

---

## 開発手順（EC2 上で）

1. VSCode + Remote-SSH で EC2 に接続
2. VSCode 上で Devcontainer が自動起動
3. 以下のコマンドでアプリを起動：

```bash
npm install
npm run dev
```
