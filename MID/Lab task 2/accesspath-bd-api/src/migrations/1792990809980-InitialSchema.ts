import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1792990809980 implements MigrationInterface {
    name = 'InitialSchema1792990809980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "building" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "buildingType" character varying NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bbfaf6c11f141a22d2ab105ee5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accessibility_feature" ("id" SERIAL NOT NULL, "buildingId" integer NOT NULL, "featureType" character varying NOT NULL, "description" character varying NOT NULL, "isAvailable" boolean NOT NULL DEFAULT true, "lastVerifiedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_94cb433ced8004136db2643769c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "report" ("id" SERIAL NOT NULL, "buildingId" integer NOT NULL, "reporterName" character varying NOT NULL, "message" character varying NOT NULL, "photoUrl" character varying, "status" character varying NOT NULL DEFAULT 'pending', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "accessibility_feature" ADD CONSTRAINT "FK_0426e1f1e4f878407abce789fab" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_deec01b940aa16a358298ac700d" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_deec01b940aa16a358298ac700d"`);
        await queryRunner.query(`ALTER TABLE "accessibility_feature" DROP CONSTRAINT "FK_0426e1f1e4f878407abce789fab"`);
        await queryRunner.query(`DROP TABLE "report"`);
        await queryRunner.query(`DROP TABLE "accessibility_feature"`);
        await queryRunner.query(`DROP TABLE "building"`);
    }

}
