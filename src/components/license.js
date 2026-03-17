import * as React from 'react'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
  wrapper
} from './license.module.css'

const data = [
  {
    titleName: '小型特殊自動車免許',
    status: '免許',
    acquisitionDate: '2007年03月',
    type: '国家資格',
    category: '公安委員会',
    issuer: '東京都公安委員会',
  },
  {
    titleName: '原動機付自転車免許',
    status: '免許',
    acquisitionDate: '?年?月',
    type: '国家資格',
    category: '公安委員会',
    issuer: '東京都公安委員会',
  },
  {
    titleName: '準中型自動車免許(5t限定)',
    status: '免許',
    acquisitionDate: '2009年11月',
    type: '国家資格',
    category: '公安委員会',
    issuer: '東京都公安委員会',
  },
  {
    titleName: '二級小型船舶操縦士',
    status: '免許',
    acquisitionDate: '2023年10月',
    type: '国家資格',
    category: '国土交通省',
    issuer: '国土交通大臣',
  },
  {
    titleName: '第二種電気工事士 (電工2種)',
    status: '免状',
    acquisitionDate: '2024年10月',
    type: '国家資格',
    category: '経済産業省',
    issuer: '東京都知事',
  },
  {
    titleName: '認定電気工事従事者',
    status: '予定',
    acquisitionDate: '2026年4月講習受講予定→認定申請及び交付申請へ',
    type: '国家資格',
    category: '経済産業省',
    issuer: '-',
  },
  {
    titleName: '乙種第1類危険物取扱者 (乙1)',
    status: '免状',
    acquisitionDate: '2007年07月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    titleName: '乙種第2類危険物取扱者 (乙2)',
    status: '免状',
    acquisitionDate: '2008年03月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    titleName: '乙種第4類危険物取扱者 (乙4)',
    status: '免状',
    acquisitionDate: '2006年09月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    titleName: '乙種第5類危険物取扱者 (乙5)',
    status: '免状',
    acquisitionDate: '2008年03月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    titleName: '乙種第6類危険物取扱者 (乙6)',
    status: '免状',
    acquisitionDate: '2007年07月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    titleName: '第三級アマチュア無線技士 (3アマ)',
    status: '免許',
    acquisitionDate: '2023年08月',
    type: '国家資格',
    category: '総務省',
    issuer: '関東総合通信局長',
  },
  {
    titleName: '基本情報技術者 (FE)',
    status: '合格',
    acquisitionDate: '2009年05月',
    type: '国家資格',
    category: '経済産業省',
    issuer: '経済産業省',
  },
  {
    titleName: 'JSTQB認定テスト技術者資格 Foundation Level (JSTQB FL)',
    status: '合格',
    acquisitionDate: '2025年05月',
    type: '民間検定',
    category: '民間',
    issuer: 'JSTQB（Japan Software Testing Qualifications Board）',
  },
  {
    titleName: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
    status: '合格',
    acquisitionDate: '2026年03月',
    type: '民間検定',
    category: '民間',
    issuer: 'Amazon Web Services',
  },
  {
    titleName: '日本商工会議所簿記検定試験 3級 (日商簿記3級)',
    status: '合格',
    acquisitionDate: '2007年06月',
    type: '公的資格',
    category: '公的資格',
    issuer: '日本商工会議所',
  },
  {
    titleName: 'ピティナ・ピアノステップ 発展1',
    status: '合格',
    acquisitionDate: '2007年05月',
    type: '民間検定',
    category: '民間',
    issuer: '一般社団法人全日本ピアノ指導者協会 (ピティナ)',
  },
  {
    titleName: 'ピティナ・ピアノ演奏検定 D級',
    status: '合格',
    acquisitionDate: '2005年07月',
    type: '民間検定',
    category: '民間',
    issuer: '一般社団法人全日本ピアノ指導者協会 (ピティナ)',
  },
  {
    titleName: '温泉ソムリエ',
    status: '認定',
    acquisitionDate: '2024年09月',
    type: '民間検定',
    category: '民間',
    issuer: '温泉ソムリエ協会',
  },
  {
    titleName: '日本漢字能力検定 準2級 (漢検準2級)',
    status: '合格',
    acquisitionDate: '2005年06月',
    type: '民間検定',
    category: '民間',
    issuer: '公益財団法人 日本漢字能力検定協会',
  },
  {
    titleName: '日本漢字能力検定 3級 (漢検3級)',
    status: '合格',
    acquisitionDate: '2004年07月',
    type: '民間検定',
    category: '民間',
    issuer: '公益財団法人 日本漢字能力検定協会',
  },
  {
    titleName: '日本漢字能力検定 4級 (漢検4級)',
    status: '合格',
    acquisitionDate: '2003年11月',
    type: '民間検定',
    category: '民間',
    issuer: '公益財団法人 日本漢字能力検定協会',
  },
  {
    titleName: '日本漢字能力検定 5級 (漢検5級)',
    status: '合格',
    acquisitionDate: '2003年06月',
    type: '民間検定',
    category: '民間',
    issuer: '公益財団法人 日本漢字能力検定協会',
  },
  {
    titleName: '3級ウェブデザイン技能士 (ウェブデザイン技能検定 3級)',
    status: '合格',
    acquisitionDate: '2009年11月',
    type: '国家資格',
    category: '厚生労働省',
    issuer: '特定非営利活動法人インターネットスキル認定普及協会',
  },
  {
    titleName: '実用英語技能検定 3級 (英検3級)',
    status: '合格',
    acquisitionDate: '2004年11月',
    type: '民間検定',
    category: '民間',
    issuer: '日本英語検定協会',
  },
  {
    titleName: '実用英語技能検定 4級 (英検4級)',
    status: '合格',
    acquisitionDate: '2004年06月',
    type: '民間検定',
    category: '民間',
    issuer: '日本英語検定協会',
  },
  {
    titleName: '国際コミュニケーション英語能力テスト (TOEIC)',
    status: '560点',
    acquisitionDate: '2013年4月',
    type: '民間検定',
    category: '民間',
    issuer: 'Educational Testing Service',
  },
  {
    titleName: '食品衛生責任者',
    status: '合格',
    acquisitionDate: '2023年05月',
    type: '国家資格',
    category: '厚生労働省',
    issuer: '一般社団法人東京都食品衛生協会',
  },
  {
    titleName: '普通救命講習',
    status: '認定→失効',
    acquisitionDate: '2006年3月',
    type: '公的資格',
    category: '消防本部',
    issuer: '東京消防庁',
  },
];

const License = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'titleName',
        header: '名称',
      },
      {
        accessorKey: 'status',
        header: 'ステータス',
      },
      {
        accessorKey: 'type',
        header: '種類',
      },
      {
        accessorKey: 'category',
        header: '分野',
      },
      {
        accessorKey: 'issuer',
        header: '免許交付者/認定団体',
      },
      {
        accessorKey: 'acquisitionDate',
        header: '取得時期',
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { 
      pagination: { pageSize: 15, pageIndex: 0 },
      columnVisibility: {
        type: false,
        category: false,
      },
    },
  });

  return (
    <div className={wrapper}>
      <h2>
        Qualification / License
      </h2>
      <div>
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default License;
