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
    title: {
      longName: '小型特殊自動車免許',
      name: '運転免許',
      shortName: '小特免許',
    },
    status: '免許',
    acquisitionDate: '2007年03月',
    type: '国家資格',
    category: '公安委員会',
    issuer: '東京都公安委員会',
  },
  {
    title: {
      longName: '原動機付自転車免許',
      name: '運転免許',
      shortName: '原付免許',
    },
    status: '免許',
    acquisitionDate: '?年?月',
    type: '国家資格',
    category: '公安委員会',
    issuer: '東京都公安委員会',
  },
  {
    title: {
      longName: '準中型自動車免許(5t限定)',
      name: '運転免許',
      shortName: '準中型免許',
    },
    status: '免許',
    acquisitionDate: '2009年11月',
    type: '国家資格',
    category: '公安委員会',
    issuer: '東京都公安委員会',
  },
  {
    title: {
      longName: '二級小型船舶操縦士',
      name: '小型船舶操縦士',
      shortName: '二級小型船舶',
    },
    status: '免許',
    acquisitionDate: '2023年10月',
    type: '国家資格',
    category: '国土交通省',
    issuer: '国土交通大臣',
  },
  {
    title: {
      longName: '第二種電気工事士',
      name: '電気工事士',
      shortName: '電工2種',
    },
    status: '免状',
    acquisitionDate: '2024年10月',
    type: '国家資格',
    category: '経済産業省',
    issuer: '東京都知事',
  },
  {
    title: {
      longName: '乙種第1類危険物取扱者',
      name: '危険物取扱者',
      shortName: '乙1',
    },
    status: '免状',
    acquisitionDate: '2007年07月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    title: {
      longName: '乙種第2類危険物取扱者',
      name: '危険物取扱者',
      shortName: '乙2',
    },
    status: '免状',
    acquisitionDate: '2008年03月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    title: {
      longName: '乙種第4類危険物取扱者',
      name: '危険物取扱者',
      shortName: '乙4',
    },
    status: '免状',
    acquisitionDate: '2006年09月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    title: {
      longName: '乙種第5類危険物取扱者',
      name: '危険物取扱者',
      shortName: '乙5',
    },
    status: '免状',
    acquisitionDate: '2008年03月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    title: {
      longName: '乙種第6類危険物取扱者',
      name: '危険物取扱者',
      shortName: '乙6',
    },
    status: '免状',
    acquisitionDate: '2007年07月',
    type: '国家資格',
    category: '総務省',
    issuer: '東京都知事',
  },
  {
    title: {
      longName: '第三級アマチュア無線技士',
      name: 'アマチュア無線技士',
      shortName: '3アマ',
    },
    status: '免許',
    acquisitionDate: '2023年08月',
    type: '国家資格',
    category: '総務省',
    issuer: '関東総合通信局長',
  },
  {
    title: {
      longName: '食品衛生責任者',
      name: '食品衛生責任者',
      shortName: '食品衛生責任者',
    },
    status: '合格',
    acquisitionDate: '2023年05月',
    type: '国家資格',
    category: '厚生労働省',
    issuer: '一般社団法人東京都食品衛生協会',
  },
  {
    title: {
      longName: '基本情報技術者',
      name: '基本情報技術者',
      shortName: 'FE',
    },
    status: '合格',
    acquisitionDate: '2009年05月',
    type: '国家資格',
    category: '経済産業省',
    issuer: '経済産業省',
  },
  {
    title: {
      longName: '日本商工会議所簿記検定試験 3級',
      name: '日本商工会議所簿記検定',
      shortName: '日商簿記3級',
    },
    status: '合格',
    acquisitionDate: '2007年06月',
    type: '公的資格',
    category: '公的資格',
    issuer: '日本商工会議所',
  },
  {
    title: {
      longName: 'ピティナ・ピアノステップ 発展1',
      name: 'ピティナ・ピアノステップ',
      shortName: 'ピアノ･ステップ 発展1',
    },
    status: '合格',
    acquisitionDate: '2007年05月',
    type: '民間検定',
    category: '民間',
    issuer: '一般社団法人全日本ピアノ指導者協会',
  },
  {
    title: {
      longName: 'ピティナ・ピアノ演奏検定 D級',
      name: 'ピティナ・ピアノ演奏検定',
      shortName: 'ピアノ演奏検定 D級',
    },
    status: '合格',
    acquisitionDate: '2005年07月',
    type: '民間検定',
    category: '民間',
    issuer: '一般社団法人全日本ピアノ指導者協会',
  },
  {
    title: {
      longName: '温泉ソムリエ',
      name: '温泉ソムリエ',
      shortName: '温泉ソムリエ',
    },
    status: '認定',
    acquisitionDate: '2024年09月',
    type: '民間検定',
    category: '民間',
    issuer: '温泉ソムリエ協会',
  },
  {
    title: {
      longName: '日本漢字能力検定 準2級',
      name: '日本漢字能力検定',
      shortName: '漢検準2級',
    },
    status: '合格',
    acquisitionDate: '2005年06月',
    type: '民間検定',
    category: '民間',
    issuer: '公益財団法人 日本漢字能力検定協会',
  },
  {
    title: {
      longName: '日本漢字能力検定 3級',
      name: '日本漢字能力検定',
      shortName: '漢検3級',
    },
    status: '合格',
    acquisitionDate: '2004年07月',
    type: '民間検定',
    category: '民間',
    issuer: '公益財団法人 日本漢字能力検定協会',
  },
  {
    title: {
      longName: '日本漢字能力検定 4級',
      name: '日本漢字能力検定',
      shortName: '漢検4級',
    },
    status: '合格',
    acquisitionDate: '2003年11月',
    type: '民間検定',
    category: '民間',
    issuer: '公益財団法人 日本漢字能力検定協会',
  },
  {
    title: {
      longName: '日本漢字能力検定 5級',
      name: '日本漢字能力検定',
      shortName: '漢検5級',
    },
    status: '合格',
    acquisitionDate: '2003年06月',
    type: '民間検定',
    category: '民間',
    issuer: '公益財団法人 日本漢字能力検定協会',
  },
  {
    title: {
      longName: '3級ウェブデザイン技能士',
      name: 'ウェブデザイン技能士',
      shortName: 'ウェブデザイン技能検定 3級',
    },
    status: '合格',
    acquisitionDate: '2009年11月',
    type: '国家資格',
    category: '厚生労働省',
    issuer: '特定非営利活動法人インターネットスキル認定普及協会',
  },
  {
    title: {
      longName: '実用英語技能検定 3級',
      name: '実用英語技能検定',
      shortName: '英検3級',
    },
    status: '合格',
    acquisitionDate: '2004年11月',
    type: '民間検定',
    category: '民間',
    issuer: '日本英語検定協会',
  },
  {
    title: {
      longName: '実用英語技能検定 4級',
      name: '実用英語技能検定',
      shortName: '英検4級',
    },
    status: '合格',
    acquisitionDate: '2004年06月',
    type: '民間検定',
    category: '民間',
    issuer: '日本英語検定協会',
  },
  {
    title: {
      longName: '国際コミュニケーション英語能力テスト',
      name: '国際コミュニケーション英語能力テスト',
      shortName: 'TOEIC',
    },
    status: '560点',
    acquisitionDate: '2013年?月',
    type: '民間検定',
    category: '民間',
    issuer: 'Educational Testing Service',
  },
  {
    title: {
      longName: '救命講習',
      name: '普通救命講習',
      shortName: '普通救命講習',
    },
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
        accessorKey: 'title.longName',
        header: '名称\(詳細\)',
      },
      {
        accessorKey: 'title.name',
        header: '名称',
      },
      {
        accessorKey: 'title.shortName',
        header: '略称',
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
    initialState: { pagination: { pageSize: 15, pageIndex: 0 } },
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
